<template>
  <da-pao></da-pao>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted } from "vue";

class DaPao extends HTMLElement {
  constructor() {
    super();
    this.initShadow();
    this._shadow?.appendChild(this.createContext());
  }
  _shadow: ShadowRoot | null = null;
  initShadow() {
    // 隔离
    this._shadow = this.attachShadow({ mode: "closed" });
  }
  createContext() {
    const text = document.createTextNode("我是webComponent");
    return text;
  }
}
customElements.define("da-pao", DaPao);
export default defineComponent({
  mounted() {
      /* 如果不对TS类型进行处理 这里就会报错 */
    console.log(this.papa()); // 'bar'
  },
});
</script>
