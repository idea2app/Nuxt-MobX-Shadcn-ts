import { Component, toNative, Vue } from "vue-facing-decorator";

@Component
class IndexPage extends Vue {
  render() {
    return <h2>TSX page</h2>;
  }
}
export default toNative(IndexPage);
