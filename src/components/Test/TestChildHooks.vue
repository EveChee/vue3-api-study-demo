<template>
    <div v-if="show" @click="show = false">{{show}}我是测试给父组件反馈hooks的组件</div>
</template>
<script lang="ts">
import { defineComponent, reactive ,ref } from "vue";

    export default defineComponent({
        setup(){
            const show = ref(true)
            return {
                show
            }
        }
    })
</script>