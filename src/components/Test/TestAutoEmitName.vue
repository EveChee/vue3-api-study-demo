<template>
   <div class="box">
    <button @click="test">点我测试事件名称是否自动转换驼峰</button>
    <button @click.self="testNative">点我测试原生事件是否被拦截</button>
    <button @click="testPluginFn">点我测试插件是否挂载</button>
    <button @click="testProvide">点我测试全局注入</button>
    <button @click="changeProvide">点我更改全局注入</button>
    <p>全局注入不响应：{{babyName}}</p>
    <p>全局注入响应：{{babyReactiveName}}</p>
   </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    emits: {
        submitForm: ({ abc }) => {
            // 这里可以对发送的参数做校验
            // 这里return的值只是在提醒层面
            // 也就是return false 并不会阻止事件的执行，只会爆出警告
            return true
        },
        click: null
    },
    inject:{
        baby: {from: 'locas'},
        babyReactive: {from: 'locasReactive'}
    },
    computed:{
        babyName(){
            return this.baby.name
        },
        babyReactiveName(){
            return this.babyReactive.name
        }
    },
    methods: {
        test() {
            this.$emit('submitForm', { abc: 1 })
        },
        testNative() {
            this.$emit('click', '我不是原生的click，我是emit的')
        },
        testPluginFn(){
            this.pluginFn()
        },
        testProvide(){
            console.log('我是全局注入的不响应：', this.baby)
            console.log('我是全局注入的响应：', this.babyReactive)
        },
        changeProvide(){
            this.baby.name = '我不叫卢卡斯了'
            this.babyReactive.name = '我不叫卢卡斯了'
        }
    }
})
</script>
<style >
    .box{
        padding:20px;
        border:2px solid red;
        box-sizing: border-box;
    }
</style>