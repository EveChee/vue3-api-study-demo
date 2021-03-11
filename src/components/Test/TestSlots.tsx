import { defineComponent, h,Fragment } from "vue";

export default defineComponent({
    setup(props, ctx){
        // console.log(1222, ctx)
        return () => (
            <>
                <div>我是TSX组件</div>
                {/* 这个语法报错的问题后面再解决 */}
                我是子元素：{ctx.slots.default()}
                我是子元素2：{ctx.slots.p2 && ctx.slots.p2()}
            </>
        )
    }
})