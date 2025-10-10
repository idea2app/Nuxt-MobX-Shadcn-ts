import { Component, toNative, Vue } from "vue-facing-decorator";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "vue/jsx-runtime";
import Link from "../components/Link";

@Component
class MdxDemoPage extends Vue {
  content: any = null;
  isLoading = true;

  async mounted() {
    try {
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

      // Evaluate the markdown string with custom components
      const { default: MDXContent } = await evaluate(markdownContent, {
        ...runtime,
        useMDXComponents: () => ({
          a: Link, // Replace <a> tags with custom Link component
        }),
      });

      this.content = MDXContent;
      this.isLoading = false;
    } catch (error) {
      console.error("Error rendering MDX:", error);
      this.isLoading = false;
    }
  }

  render() {
    if (this.isLoading) {
      return <div>Loading MDX content...</div>;
    }

    const MDXContent = this.content;

    return (
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        <h1>MDX Dynamic Rendering Demo</h1>
        <hr />
        {MDXContent ? <MDXContent /> : <p>Failed to load content</p>}
      </div>
    );
  }
}

export default toNative(MdxDemoPage);
