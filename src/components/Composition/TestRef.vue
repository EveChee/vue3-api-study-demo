<template>
    <div>num:{{num}}我是一个简单值，ref就可以了</div>
</template>
<script lang="ts">
    import { defineComponent, ref } from "vue";

    export default defineComponent({
        setup(props, ctx){
            const num = ref(0)
            return {
                num
            }
        }
    })
</script>