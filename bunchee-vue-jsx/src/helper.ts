import { h } from "vue";

export function customH<T, W, X>(tag: T, props: W, ...vnode: any[]) {
  return h(tag, props, vnode);
}

export function Fragment(...vnode: any[]) {
  return h('div', {}, vnode)
}
