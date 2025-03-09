<template>
  <div class="content">
    <h1>Rsbuild with Vue</h1>
    <p>Start building amazing things with Rsbuild.</p>
    <Layout></Layout>
    <!-- <TestH1></TestH1> -->
    <!-- <Spinner></Spinner> -->
    <div>测试</div>
  </div>
</template>

<script setup lang="tsx">
import { defineComponent, h } from "vue";
import { Layout } from "lib";

const TestH1 = defineComponent({
  render() {
    return h("h1", undefined, "h函数");
  },
});

const Spinner = defineComponent({
  render() {
    return h("div", undefined, [
      h("h1", undefined, ["vue2 jsx组件测试"]),
      h("span", undefined, ["span元素"]),
    ]);
  },
});
</script>

<style scoped></style>
