<template>
  <p>book:{{ book.title }}我是一个复杂值，reactive就可以了</p>
  <p @click="book.current++">我是当前页码： {{book.current}}</p>
  <p>我是带解构双倍页码： {{doublePage}} </p>
  <p>我是不带解构双倍页码： {{doublePage2}} </p>
  <!-- <p @click="unSetBook.total++">我是只读的总页数： {{unSetBook.total}} </p> -->
</template>
<script lang="ts">
import { computed, defineComponent, reactive, readonly } from "vue";
const origin = { title: "我是书啊", total: 800, current: 1 };

export default defineComponent({
  setup(props, ctx) {
    const book = reactive(origin);
    // 这时候我们想依赖当前页数来做一个其他操作
    const { current } = book;
    const doublePage = computed(() => current * 2);
    const doublePage2 = computed(() => book.current * 2);
    const unSetBook = readonly({total: book.total})
    return {
      book,
      doublePage,
      doublePage2,
      unSetBook
    };
  },
});
</script>
