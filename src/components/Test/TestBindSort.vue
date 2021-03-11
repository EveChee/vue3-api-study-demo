<template>
    <div lobida="123" v-bind="{lobida:'456'}">这里测试绑定属性的覆盖机制</div>
    <div v-bind="{lobida:'456'}" lobida="123">这里测试绑定属性的覆盖机制</div>
</template>