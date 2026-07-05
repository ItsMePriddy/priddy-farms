// <image-slot> — user-fillable image placeholder
// Pure CSS empty state. Client drops real photos into these slots.
// NEVER draw imagery with SVG — slots are just styled containers.
if (typeof window !== "undefined" && !customElements.get("image-slot")) {
  customElements.define(
    "image-slot",
    class extends HTMLElement {
      connectedCallback() {
        this.setAttribute("data-loaded", "false");
        this.style.display = "block";
        this.style.background = "#F3E7CE";
        this.style.border = "2px dashed #D4C5A0";
        this.style.borderRadius = (this.getAttribute("shape") === "rounded"
          ? (this.getAttribute("radius") || "12") + "px"
          : "12px");
        this.style.minHeight = "100px";
        this.style.position = "relative";

        const placeholder = this.getAttribute("placeholder") || "Drop an image";

        // Only add label if no child image yet
        if (!this.querySelector("img")) {
          const label = document.createElement("span");
          label.textContent = placeholder;
          label.style.cssText =
            "position:absolute;inset:0;display:flex;align-items:center;justify-content:center;" +
            "padding:16px;color:#8A7A60;font-size:14px;text-align:center;" +
            "font-style:italic;font-family:'Nunito Sans',sans-serif;pointer-events:none";
          this.appendChild(label);
        }
      }
    }
  );
}
