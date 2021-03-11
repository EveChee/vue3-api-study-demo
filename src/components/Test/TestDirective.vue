<template>
  <div v-test-directive="8888">我是自定义指令的组件</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { TestDirectve } from "../../common/directives/TestDirective";
export default defineComponent({
  directives: {
    'test-directive': TestDirectve,
  },
});
</script>
