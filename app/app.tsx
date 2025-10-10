import { Component, toNative, Vue } from "vue-facing-decorator";
import { NuxtPage } from "#components";

@Component
class AppShell extends Vue {
  render() {
    return (
      <>
        <h1>Nuxt-MobX-Shadcn-ts demo</h1>
        <NuxtPage />
      </>
    );
  }
}
export default toNative(AppShell);
