<template>
  <header>
    <h1>{{ title }}</h1>

    <Button 
    @btn-click="$emit('toggle-add-task')" 
    :text="showAddTask ? 'Close' :'Add Task'" 
    :color="showAddTask ? 'red' : 'green'"
     />
    <!-- <Button text="Update Task" color="gray" />
    <Button text="Delete Task" color="red" /> -->
  </header>
</template>
 
<script>
import Button from './Button.vue'

export default {
  name: 'Header',
  props: {
    title: String,
    showAddTask: Boolean
  },
  components: {
    Button,
  }, 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  display: block;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  display: flex;
}
</style>
