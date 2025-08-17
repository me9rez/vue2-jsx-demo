import { h, defineComponent } from "vue";

/**
 * 自定义 h 函数, 模拟 vue3 的 h 函数
 * @param tag 
 * @param props 
 * @param vnodes 
 * @returns 
 */
export function customH<T, W, X>(tag: T, props: W, ...vnodes: any[]) {
  return h(tag, props, vnodes);
}

/**
 * 自定义 Fragment 组件
 */
export const Fragment = defineComponent({
  setup(props, { slots, attrs, emit }) {
    return () => {
      const defaultSlot = slots.default
      return defaultSlot ? defaultSlot() : null
    }
  }
})

