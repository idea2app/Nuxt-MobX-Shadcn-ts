export default function Link(props: { href?: string }, { slots }: any) {
  return (
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
}
