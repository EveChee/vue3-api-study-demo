<template>
  <ul>
    <li v-for="n in total" :key="n" :ref="setLiRef" @click="changeTotal">我是测试refs的{{ n }}</li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  data() {
    return {
      liRefs: [],
      total: 8
    };
  },
  methods: {
    setLiRef(el) {
      el && this.liRefs.push(el);
    },
    changeTotal(){
        this.total++
    }
  },
  beforeUpdate() {
    this.liRefs = [];
    console.log('组件更新之前，ref要清空:', this.liRefs);
  },
  updated() {
    console.log('组件更新了，ref会重新设置:', this.liRefs);
  },
});
</script>
