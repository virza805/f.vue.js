<template>
    <h3>{{ task.text }}</h3>
<!--     
  <div class="task">
    <h3>{{ task.text }}</h3>
    <p> {{ task.day }} </p>
  </div> -->
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: Object,
    // text: String,
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
