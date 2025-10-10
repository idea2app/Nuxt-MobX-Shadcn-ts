import type { FunctionalComponent } from "vue";
import type { JSX } from "vue/jsx-runtime";

export const Link: FunctionalComponent<JSX.IntrinsicElements['a']> = (
  { href },
  { slots }
) => (
  <a
    style={{
      color: "pink",
      textDecoration: "underline",
      fontWeight: "bold",
    }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {slots.default?.()}
  </a>
);
