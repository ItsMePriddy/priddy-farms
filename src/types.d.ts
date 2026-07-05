import type React from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "image-slot": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          id?: string;
          placeholder?: string;
          shape?: "rect" | "rounded";
          radius?: string;
        },
        HTMLElement
      >;
    }
  }
}
