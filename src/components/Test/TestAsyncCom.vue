<template>
    <p>我来加载异步组件</p>
    <asyncCom />    
</template>
<script lang="ts">
import { defineAsyncComponent, defineComponent } from "@vue/runtime-core";
import ErrorComponent from './AsyncErr.vue'
import LoadingComponent from './AsyncLoading.vue'
const asyncCom = defineAsyncComponent({
    loader: () => {
        return new Promise(async (res, rej) => {
            const a:any = await import('./AsyncCom.vue')
            setTimeout(() => res(a), 10000)
        })
    },
    // loader: () => Promise.reject(new Error('1233')),
    delay: 5000,
     /* 
     这里的delay其实并不是说会一定延迟这么多加载
     如果你的组件直接就是完成状态  他就会直接加载出来
     如果你的组件到这个时间点之后还没完成 就会显示loading
     */
    errorComponent: ErrorComponent,
    loadingComponent: LoadingComponent
})
export default defineComponent({
    components: {asyncCom}
})
</script>