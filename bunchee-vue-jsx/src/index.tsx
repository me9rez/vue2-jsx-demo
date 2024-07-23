import { defineComponent, PropType } from "vue";
import { customH as h } from "./helper";

export const layoutProps = {
  /**
   * 组件大小
   */
  size: {
    type: String as PropType<"small" | "medium" | "large">,
    default: "medium",
  },
} as const;

/**
 * 布局组件
 */
export const Layout = defineComponent({
  props: layoutProps,
  render() {
    return (
      <div>
        <h1>vue2 jsx组件测试</h1>
        <span>span元素rrr</span>
      </div>
    );
  },
});
