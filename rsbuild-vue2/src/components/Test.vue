<template>
    <div>
        <span>foo:{{ foo }}</span>
        <span>bar:{{ bar }}</span>
        <button @click="handleChange()">change</button>
    </div>
</template>

<script lang="ts">
import { defineComponent,h } from 'vue'
import { useVModel, useVModels } from '@vueuse/core'

export default defineComponent({
    props: {
        foo: String,
        bar: Number
    },
    emits: {
        "update:foo": String,
        "update:bar": Number,
    },
    setup(props, { emit }) {
        const { foo, bar } = useVModels(props, emit)

        function handleChange() {
            foo.value = 'foo'
            bar.value = 100
            console.log(foo.value, bar.value);
            // emit('update:foo', 'foo')
        }

        return {
            foo, bar, handleChange
        }
    }
})


</script>