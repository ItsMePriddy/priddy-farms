// Register <image-slot> custom element for photo placeholders
// Matches the design system's image-slot.js behavior

if (typeof window !== "undefined") {
  class ImageSlot extends HTMLElement {
    connectedCallback() {
      const placeholder = this.getAttribute("placeholder") || "Drop a photo here";
      const shape = this.getAttribute("shape") || "rect";
      const radius = this.getAttribute("radius") || "12";
      this.style.display = "block";
      this.style.background = "#F3E7CE";
      this.style.border = "2px dashed #D4C5A0";
      this.style.overflow = "hidden";
      this.style.position = "relative";
      this.style.minHeight = "100px";
      if (shape === "rounded") {
        this.style.borderRadius = `${radius}px`;
      } else {
        this.style.borderRadius = "12px";
      }

      // Only add placeholder text if no image child
      if (!this.querySelector("img")) {
        this.setAttribute("data-placeholder", placeholder);
        const label = document.createElement("div");
        label.style.cssText =
          "display:flex;align-items:center;justify-content:center;height:100%;width:100%;padding:16px;color:#8A7A60;font-size:14px;text-align:center;font-style:italic;font-family:'Nunito Sans',sans-serif;position:absolute;top:0;left:0;";
        label.textContent = placeholder;
        this.appendChild(label);
      }
    }
  }

  if (!customElements.get("image-slot")) {
    customElements.define("image-slot", ImageSlot);
  }
}
