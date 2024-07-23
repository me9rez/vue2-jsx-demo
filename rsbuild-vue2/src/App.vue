<template>
  <div class="content">
    <h1>Rsbuild with Vue</h1>
    <p>Start building amazing things with Rsbuild.</p>
    <!-- <TestH1></TestH1> -->
    <Layout></Layout>
    <!-- <Spinner></Spinner> -->
  </div>
</template>

<script setup lang="ts">
import { defineComponent, h } from "vue";
import { Layout } from "@components/index";

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
