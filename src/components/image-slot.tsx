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
      }
    }
  );
}
