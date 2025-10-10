import { defineComponent } from "vue";

export default defineComponent({
  name: "Link",
  props: {
    href: String,
  },
  setup(props, { slots }) {
    return () => (
      <a
        href={props.href}
        style={{
          color: "#0066cc",
          textDecoration: "underline",
          fontWeight: "bold",
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        {slots.default?.()}
      </a>
    );
  },
});
