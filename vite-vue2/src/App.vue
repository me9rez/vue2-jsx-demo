<script setup lang="ts">
import { Layout } from 'lib'
import { watchEffect, watch, ref } from 'vue'

const count = ref(0)

const unWatch = watch(count, () => {
  console.log(count.value)
})

</script>

<template>
  <div>
    <Layout size="large">

    </Layout>
    <div>
      <h1>当前计数: {{ count }}</h1>
      <button @click="count++">增加</button>
      <button @click="unWatch">取消监听</button>
    </div>

  </div>
</template>

<style scoped></style>
