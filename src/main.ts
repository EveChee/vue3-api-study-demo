import { createApp,reactive } from 'vue'
import App from './App.vue'
import TestPlugin from './plugins/TestPlugins'
const app1 = createApp(App)
// 测试isCustomElement
/* 
这个东西在你用了webComponent的时候有用
会让vue忽略这个组件，不然的话他会觉得是你没有注册组件就使用
然后报错
*/
app1.config.isCustomElement = tag => tag.startsWith('da-')

/* 
测试全局挂载
*/
app1.config.globalProperties.papa = (num:any) => console.log('我是全局api:$papa', num)
app1.use(TestPlugin)
// 测试不响应和响应的全局注入
/* 
这里必须分开两个对象，不然会导致无法响应。
原理我们以后再研究源码
*/
const locas = {name: '卢卡斯'}
const locas2 = {name: '卢卡斯'}
app1.provide('locas', locas)
app1.provide('locasReactive', reactive(locas2))
// 这个mount也不会像vue2一样替换根元素了，会直接插入做子元素
app1.mount('#app')

// 对vue进行类型补充说明
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
      papa: () => any
      locas: unknown
    }
}