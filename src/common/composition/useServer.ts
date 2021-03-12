import {isReactive, isRef, reactive, ref, watchEffect, WatchOptionsBase} from 'vue'
interface ServerLink {
    cancel:Function
}
export default function useServer<T = object>(val:T, cb:(value:T) => ServerLink | undefined | any, options?:WatchOptionsBase){
    /* @TODO:util check empty!*/
    if(val === null || val === undefined) {
        console.error(new Error('This listener is meaningless!'))
        return [val, () => {}]
    }
    const isReact = isReactive(val) || isRef(val)
    const reactiveVal = isReact ? val : typeof val === 'object' ? reactive(val as T extends object) : ref(val)
    const stop = watchEffect((onInvalidate) => {
        const token = cb(reactiveVal as T)
        onInvalidate(() => token?.cancel && token.cancel())
    },options)
    return [reactiveVal, stop]
}