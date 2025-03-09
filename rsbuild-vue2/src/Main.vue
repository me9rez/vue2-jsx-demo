<template>
    <div>
        <Layout></Layout>
        <Test v-model:foo="foo"></Test>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Layout } from "lib";
import Test from './components/Test.vue';

export default defineComponent({
    components: {
        Layout,
        Test
    },
    setup() {
        const foo = ref('test')
        const bar = ref(0)

        return { foo, bar }
    }
})

</script>