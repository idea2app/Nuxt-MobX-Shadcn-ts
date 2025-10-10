import { Suspense } from "vue";
import * as runtime from "vue/jsx-runtime";
import { Component, Setup, toNative, Vue } from "vue-facing-decorator";
import { evaluate } from "@mdx-js/mdx";

import { Link } from "../components/Link";

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

function evaluateMDX() {
  return defineAsyncComponent(async () => {
    const { default: MDXContent } = await evaluate(markdownContent, runtime);
    // @ts-expect-error Upstream Type compatibility issue
    return () => <MDXContent components={{ a: Link }} />;
  });
}

@Component
class MdxDemoPage extends Vue {
  @Setup(evaluateMDX)
  MDXContent?: ReturnType<typeof evaluateMDX>;

  render() {
    const { MDXContent } = this;
    
    return (
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        <h1>MDX Dynamic Rendering Demo</h1>
        <hr />
        <Suspense>
          {MDXContent ? <MDXContent /> : <p>Loading MDX content...</p>}
        </Suspense>
      </div>
    );
  }
}
export default toNative(MdxDemoPage);
