<script setup lang="tsx">
import { Layout, h, Fragment } from 'lib'
import { watchEffect, watch, ref, defineComponent } from 'vue'

const count = ref(0)

const unWatch = watch(count, () => {
  console.log(count.value)
})

const Test1 = defineComponent({
  setup() {
    return () => {
      return (
        <>
          <h1>Test1 Component</h1>
        </>
      )
    }
  }
})

</script>

<template>
  <div>
    <Layout size="large">

    </Layout>

    <Test1 />

    <div>
      <h1>当前计数: {{ count }}</h1>
      <button @click="count++">增加</button>
      <button @click="unWatch">取消监听</button>
    </div>

  </div>
</template>

<style scoped></style>
