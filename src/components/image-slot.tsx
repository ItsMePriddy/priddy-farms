// Farm-themed image placeholder — renders a warm gradient background
// Replace with real photos later
if (typeof window !== "undefined" && !customElements.get("image-slot")) {
  const gradients: Record<string, string> = {
    default: "linear-gradient(135deg, #C05F17 0%, #8A3324 50%, #6B2A1C 100%)",
    fall: "linear-gradient(135deg, #E8A231 0%, #C05F17 50%, #8A3324 100%)",
    christmas: "linear-gradient(135deg, #2F4A33 0%, #1B3321 50%, #0F2615 100%)",
    party: "linear-gradient(135deg, #8A3324 0%, #C05F17 50%, #E8A231 100%)",
    visit: "linear-gradient(135deg, #4A7C59 0%, #8A3324 50%, #C05F17 100%)",
  };

  customElements.define(
    "image-slot",
    class extends HTMLElement {
      connectedCallback() {
        const id = this.getAttribute("id") || "";
        const placeholder = this.getAttribute("placeholder") || "Farm photo";
        const shape = this.getAttribute("shape") || "rect";
        const radius = this.getAttribute("radius") || "12";
        const existing = this.querySelector("img");
        if (existing) return;

        const img = document.createElement("img");
        // Choose theme based on id prefix
        const theme = id.includes("fall") || id.includes("haunted")
          ? "fall"
          : id.includes("christmas")
          ? "christmas"
          : id.includes("party") || id.includes("events")
          ? "party"
          : id.includes("visit") || id.includes("location")
          ? "visit"
          : "default";
        const grad = gradients[theme];

        // Generate a warm SVG gradient as the embedded image
        img.alt = placeholder;
        img.style.cssText =
          "display:block;width:100%;height:100%;object-fit:cover;border-radius:" +
          (shape === "rounded" ? radius + "px" : "12px") +
          ";";

        // Inline SVG gradient image — no external deps needed
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="${grad.match(/#[0-9A-Fa-f]{6}/)?.[0] || "#C05F17"}"/>
              <stop offset="100%" stop-color="${grad.match(/#[0-9A-Fa-f]{6}/g)?.[1] || "#8A3324"}"/>
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#g)"/>
          <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"
                fill="rgba(255,255,255,0.7)" font-family="Nunito Sans, sans-serif"
                font-size="14" font-style="italic">${placeholder}</text>
        </svg>`;
        img.src = "data:image/svg+xml," + encodeURIComponent(svg);
        this.innerHTML = "";
        this.style.background = "none";
        this.style.border = "none";
        this.style.minHeight = "0";
        this.appendChild(img);
      }
    }
  );
}
