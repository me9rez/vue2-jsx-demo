<template>
  <div class="content">
    <h1>Rsbuild with Vue2</h1>
    <!-- <Test1 /> -->
    <!-- <Test2 /> -->
    <Test3></Test3>
    <Layout size="large">
      <h1>slot 内容</h1>
    </Layout>
  </div>
</template>

<script setup lang="tsx">
import { defineComponent, } from "vue";
import { Layout, h } from "lib";

// const Test1 = defineComponent({
//   render() {
//     return h("h1", undefined, "Test1 Component");
//   },
// });

// const Test2 = defineComponent({
//   render() {
//     return h("div", undefined, [
//       h("h1", undefined, ["Test2 Component"]),
//       h("span", undefined, ["Test2 span元素"]),
//     ]);
//   },
// });

const Test3 = defineComponent({
  setup() {
    return () => {
      return (
        <div>
          <h3>Test3 Component</h3>
        </div>
      )
    }
  }
});


</script>

<style scoped></style>
