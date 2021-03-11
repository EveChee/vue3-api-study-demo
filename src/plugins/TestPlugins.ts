// vue3的插件写法和vue2有细微的差别
// 主要是全局挂载的改变导致
export default {
    install(app, options){
        // 以前是 Vue.prototype.xxx = xxx
        app.config.globalProperties.pluginFn = () => {
            console.log('我是插件，我被调用了')
        } 
    }
}
// 对vue进行类型补充说明
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        pluginFn: () => any
    }
}