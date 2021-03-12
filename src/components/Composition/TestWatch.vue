<template>
    <p @click="target.age++">我是原始数据：{{ target.age }}</p>
    <p @click="str += 'p'">我是单值数据：{{ str }}</p>
    <p @click="arr.push(Math.random())">我是数组数据：{{ arr }}</p>
    <p @click="arrdInner.app.haha++">我是深度数组数据：num-{{ arrdInner.num }} other-{{ arrdInner.other }}</p>
    <p @click="val.abc.age++">我是逻辑抽离数据：age-{{ val.abc.age }}</p>
    <p @click="locasVal.abc.momoda[0]++">我是逻辑抽离数据：momoda[0]-{{ locasVal.abc.momoda[0] }}</p>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, watch, watchEffect } from "vue";
import useServer, { ServerCallback } from '../../common/composition/useServer'
const origin = {
    age: 17
}
export default defineComponent({
    setup(props, ctx) {
        const target = reactive(origin)
        watch(() => target.age, (age, prevAge) => {
            console.log('原来是:', prevAge, '现在是:', age)
        })
        watch(() => origin.age, (age, prevAge) => {
            console.log('我是非响应值，我不会运行')
        })
        watch(origin, (age, prevAge) => {
            console.log('我是非响应值，我不会运行')
        })
        origin.age++
        // 检测单个值
        const str = ref('')
        watch(str, (s, ps) => {
            console.log('单个值原来是：', ps, '现在是:', s)
        })
        // 检测数组
        const arr: any = reactive([])
        watch(arr, (a, pa) => {
            console.log('数组原来是：', pa, '现在是:', a)
        })
        // 检测深度!!!!!!
        const arrdInner = reactive({ num: 1, other: 1, app: { haha: 333 } })
        watch(arrdInner, (a, pa) => {
            console.log('深度对象原来是：', pa, '现在是:', a)
        })
        /* 
        上面是自己写的 下面是源码的测试用例
        结果就是MD加不加deep都可以监听到深层次！
        what happen?
        原来是检测到是reactive的值 就自动deep
         if (isRef(source)) {
            getter = () => (source as Ref).value
            forceTrigger = !!(source as Ref)._shallow
        } else if (isReactive(source)) {
            getter = () => source
            deep = true
        }
        */

        const state = reactive({
            nested: {
                count: ref(0)
            },
            array: [1, 2, 3],
            map: new Map([['a', 1], ['b', 2]]),
            set: new Set([1, 2, 3])
        })

        watch(
            () => state,
            state => {
                console.log(111, [
                    state.nested.count,
                    state.array[0],
                    state.map.get('a'),
                    state.set.has(1)
                ])
            },
            { deep: true }
        )

        state.nested.count++

        /* 
        接下来看看watchEffect
         这个方法，其实就是类似immediate的watch
         然后会返回一个取消监听的方法。
         比如我们可以监听页码的变动，自动请求列表
         源码部分最后运行的长这样
         if (cb) {
            if (immediate) {
                job()
            } else {
                oldValue = runner()
            }
        } else if (flush === 'post') {
            queuePostRenderEffect(runner, instance && instance.suspense)
        } else {
            runner()
        }
        */
        // initial run

        watchEffect(() => {
            console.log('我是watchEffect，我会直接执行，然后变化再执行', arrdInner.app.haha)
        })
        const locas = reactive({abc:{momoda:[123]}})
        const okb = { abc: origin }
        const [val, stopWatchVal] = useServer(okb, (value) => {
            console.log('我是okbUseServe的回调：', value.abc.age)
        })
        const [locasVal, stopWatchLocasVal] = useServer(locas, (value) => {
            console.log('我是locasUseServe的回调：', value.abc.momoda[0])
        })
        return {
            target,
            str,
            arr,
            arrdInner,
            val,
            locasVal
        }
    }
})
</script>