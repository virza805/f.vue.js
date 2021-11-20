<template>
    <!-- <div :key="task.id" v-for="task in tasks" >
        <Task @delete-task="$emit('delete-task', task.id)" :task="task" />
        <h3>{{ task.text }}</h3> 
    </div> -->
     <div @toggle-reminder="$emit('toggle-reminder', task.id)" @delete-task="$emit('delete-task', task.id)" :key="task.id" v-for="task in tasks" >
        <div @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder ? 'reminder' : '', 'task']">
          <h4>
            {{ task.text }}
            <i @click="$emit('delete-task' , task.id)" class="fa fa-times"></i>
          </h4>
          <p> {{ task.day }} </p>
        </div>
    </div>
</template>

<script>

import Task from './Task.vue'
// import Button from './Button.vue'
// import Task from './Task.vue'

export default {
  name: 'Tasks',
  props: {
    tasks: Array,
  },
 
  commponents: {
    Task,
  },
  emit: ['delete-task', 'toggle-reminder'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.task{
  background-color: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer; 
}
.task.reminder {
  border-left: 5px solid green;

}
.task h4{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.fa-times{
  color: red;
}


</style>
