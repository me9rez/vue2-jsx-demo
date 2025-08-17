import { h } from "vue";

export function customH<T, W, X>(tag: T, props: W, ...vnodes: any[]) {
  return h(tag, props, vnodes);
}

export function Fragment(...vnodes: any[]) {
  console.log(vnodes);
  return h('div', {}, vnodes)
}
