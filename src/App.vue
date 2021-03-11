<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <TeleTest></TeleTest>  
  <TestAutoEmit @submit-form="seeEmit" @click="seeNoNative" @mouseenter.self="seeNative"></TestAutoEmit> 
  <TestModels v-model:inp="inp" v-model:inp2="inp2" v-model:inp3.hahaha="inp3" v-model:inp4.xixixi="inp4"/>     
  <TestWebCom></TestWebCom>
  <TestBindSort></TestBindSort>
  <TestAsyncCom></TestAsyncCom>
  <TestRefs></TestRefs>
  <TestSlots>
    <p>对，我就是子元素</p>
      <template v-slot:p2>
        <p >对，我就是子元素2</p>
    </template>
  </TestSlots>
  <TestDirective/>
  <TestChildHooks @vnode-before-mount="seeChildHook"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import TeleTest from './components/Test/TestTeleport.vue'
import TestAutoEmit from './components/Test/TestAutoEmitName.vue'
import TestModels from './components/Test/TestModels.vue'
import TestWebCom from './components/Test/TestWebCom.vue'
import TestBindSort from './components/Test/TestBindSort.vue'
import TestAsyncCom from './components/Test/TestAsyncCom.vue'
import TestRefs from './components/Test/TestRefs.vue'
import TestSlots from './components/Test/TestSlots.tsx'
import TestDirective from './components/Test/TestDirective.vue'
import TestChildHooks from './components/Test/TestChildHooks.vue'
export default defineComponent({
  name: 'App',
  data(){
    return {
      inp:'123',
      inp2: '999',
      inp3: '121',
      inp4: '0x88'
    }
  },
  components: {
    HelloWorld,
    TeleTest,
    TestAutoEmit,
    TestModels,
    TestWebCom,
    TestBindSort,
    TestAsyncCom,
    TestRefs,
    TestSlots,
    TestDirective,
    TestChildHooks
  },
  methods: {
    seeEmit(opt:any){
      console.log(opt)
    },
    seeNative(){
      console.log('我是原生的事件，我触发了')
    },
    seeNoNative(str:any){
      console.log(str)
    },
    seeChildHook(){
      console.log('子组件的创建之前钩子触发了')
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>