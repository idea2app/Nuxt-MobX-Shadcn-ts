import { Suspense } from 'vue';
import * as runtime from 'vue/jsx-runtime';
import { Component, Setup, toNative, Vue } from 'vue-facing-decorator';
import { evaluate } from '@mdx-js/mdx';

import { Link } from '../components/Link';

const evaluateMDX = (link: string) =>
  defineAsyncComponent(async () => {
    const { data, error } = await useFetch<string>(link);

    if (error.value) throw new URIError(error.value?.message);

    const { default: MDXContent } = await evaluate(data.value!, runtime);
    // @ts-expect-error Upstream Type compatibility issue
    return () => <MDXContent components={{ a: Link }} />;
  });

@Component
class MdxDemoPage extends Vue {
  @Setup(() => evaluateMDX('https://cdn.jsdelivr.net/gh/idea2app/Nuxt-MobX-Shadcn-ts/README.md'))
  MDXContent?: ReturnType<typeof evaluateMDX>;

  render() {
    const { MDXContent } = this;

    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <Suspense>{MDXContent ? <MDXContent /> : <p>Loading MDX content...</p>}</Suspense>
      </div>
    );
  }
}
export default toNative(MdxDemoPage);
