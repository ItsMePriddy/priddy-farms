"use client";

interface ImageSlotProps {
  id?: string;
  placeholder?: string;
  shape?: "rect" | "rounded";
  radius?: string;
  style?: React.CSSProperties;
}

export default function ImageSlot({ id, placeholder, shape = "rect", radius, style }: ImageSlotProps) {
  const borderRadius = shape === "rounded" ? `${radius || "20"}px` : "12px";
  return (
    <div
      id={id}
      style={{
        background: "#F3E7CE",
        border: "2px dashed #D4C5A0",
        borderRadius,
        overflow: "hidden",
        position: "relative",
        minHeight: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        color: "#8A7A60",
        fontSize: 14,
        textAlign: "center" as const,
        fontStyle: "italic",
        fontFamily: "'Nunito Sans', sans-serif",
        ...style,
      }}
      title={placeholder}
      aria-label={placeholder}
    >
      {placeholder}
    </div>
  );
}
