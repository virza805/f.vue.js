<template>
    <button @click="onClick()" :style="{ background: color }" class="btn"> {{text}} </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String,
        color: String,
    },
    methods: {
        onClick(){
            // console.log('click')
            // this.$emit('toggle-add-task') |=> it is not reuseable
            this.$emit('btn-click')
        }
    },
}

</script>

