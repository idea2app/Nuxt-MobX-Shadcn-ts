import { Component, toNative, Vue } from "vue-facing-decorator";
import { NuxtPage, NuxtLink } from "#components";

@Component
class AppShell extends Vue {
  render() {
    return (
      <>
        <h1>Nuxt-MobX-Shadcn-ts demo</h1>
        <nav style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
          <NuxtLink to="/">Home (MobX demo)</NuxtLink>
          <NuxtLink to="/MDX">MDX demo</NuxtLink>
        </nav>
        <NuxtPage />
      </>
    );
  }
}
export default toNative(AppShell);
