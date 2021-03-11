function lazyConsole (str) {
    console.log(`我是自定义指令的${str}`)
}
export const TestDirectve = {
    beforeMount(el, binding, vnode, prevVnode){
        lazyConsole('beforeMount')
        console.log(el, binding, vnode, prevVnode)
    },
    mounted(){
        lazyConsole('mounted')
    },
    beforeUpdate(){
        lazyConsole('beforeUpdate')
    },
    updated(){
        lazyConsole('updated')
    },
    beforeUnmount() {
        lazyConsole('beforeUnmount')
    },
    unmounted(){
        lazyConsole('unmounted')
    }
}