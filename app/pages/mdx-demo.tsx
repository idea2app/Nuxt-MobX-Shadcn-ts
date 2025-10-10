import { Component, toNative, Vue } from "vue-facing-decorator";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "vue/jsx-runtime";
import Link from "../components/Link";
import { onServerPrefetch } from "vue";

// Sample Markdown content
const markdownContent = `
# MDX Demo

This is a **dynamically rendered** MDX content page.

## Features

- Server-side rendering with MDX
- Custom component replacement
- Interactive Vue components

## Links

Here are some useful links:

- [Vue.js Official Documentation](https://vuejs.org)
- [Nuxt.js Documentation](https://nuxt.com)
- [MDX Documentation](https://mdxjs.com)

## Code Example

\`\`\`javascript
console.log('Hello from MDX!');
\`\`\`

This content is rendered dynamically during server-side rendering.
`;

async function evaluateMDX() {
  const { default: MDXContent } = await evaluate(markdownContent, {
    ...runtime,
    useMDXComponents: () => ({
      a: Link, // Replace <a> tags with custom Link component
    }),
  });
  return MDXContent;
}

@Component({
  setup() {
    const mdxContent = ref<any>(null);

    onServerPrefetch(async () => {
      mdxContent.value = await evaluateMDX();
    });

    onMounted(async () => {
      if (!mdxContent.value) {
        mdxContent.value = await evaluateMDX();
      }
    });

    return { mdxContent };
  },
})
class MdxDemoPage extends Vue {
  render() {
    const MDXContent = (this as any).mdxContent;

    return (
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        <h1>MDX Dynamic Rendering Demo</h1>
        <hr />
        {MDXContent ? <MDXContent /> : <p>Loading MDX content...</p>}
      </div>
    );
  }
}

export default toNative(MdxDemoPage);
