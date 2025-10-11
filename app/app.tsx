import { Component, toNative, Vue } from "vue-facing-decorator";
import { NuxtPage, NuxtLink } from "#components";

@Component
class AppShell extends Vue {
  render() {
    return (
      <div class="markdown-body h-screen overflow-y-auto p-10">
        <h1>Nuxt-MobX-Shadcn-ts demo</h1>
        <nav class="flex gap-4 mb-5">
          <NuxtLink to="/">Home (MobX demo)</NuxtLink>
          <NuxtLink to="/MDX">MDX demo</NuxtLink>
        </nav>
        <NuxtPage />
      </div>
    );
  }
}
export default toNative(AppShell);
