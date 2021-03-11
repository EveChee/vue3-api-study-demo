<template>
    <input type="text" :value="inp" @input="$emit('update:inp', $event.target.value)">
    <input type="text" :value="inp2" @input="$emit('update:inp2', $event.target.value)">
    <input type="text" :value="inp3" @input="inp3Value">
    <input type="text" :value="inp4" @input="inp4Value">
    <p>{{inp}}{{inp2}}</p>
</template>  
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        inp: String,
        inp2: String,
        inp3: String,
        inp4:String,
        inp3Modifiers: {
            /* 
            这个名字是固定的组合 ·propName + Modifiers·
            */
            default: () => ({})
        },
        inp4Modifiers: {
            default: () => ({})
        }
    },
    methods:{
        inp3Value(e){
            console.log('修饰符:',this.inp3Modifiers)
            this.$emit('update:inp3', e.target.value)
        }  ,
         inp4Value(e){
            console.log('修饰符:',this.inp4Modifiers)
            this.$emit('update:inp4', e.target.value)
        }   
    }
})
</script>
