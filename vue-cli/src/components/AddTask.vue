<template>
    <form action="" @submit="onSubmit" class="add-form">
        <div class="form-control">
            <label for="">Task</label>
            <input type="text" v-model="text" name="text" id="" placeholder="Add Task">
        </div>
        <div class="form-control">
            <label for="">Day & Time</label>
            <input type="text" v-model="day" name="day" id="" placeholder="Add Day & Time">
        </div>
        <div class="form-control form-control-check">
            <label for="">Set Reminder</label>
            <input type="checkbox" v-model="reminder" name="reminder">
        </div>
        <input type="submit" value="Save Task" class="btn btn-block">
    </form>
</template>

<script>
export default {
    name: 'AddTask',
    data() {
        return {
            text: '',
            day: '',
            reminder: false,
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault()

            if(!this.text) {
                alert('Please add a task')
                return
            }

            const newTask = {
                // id: Math.floor(Math.random() * 100000),
                text: this.text,
                day: this.day,
                reminder: this.reminder,
            } 

            this.$emit('add-task', newTask)
            // console.log(newTask)

            this.text = ''
            this.day = ''
            this.reminder = false
            
        }
    },
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .add-form{
        margin-bottom: 40px;
    }
    .form-control {
        margin: 20px 0;
    }
    .form-control label {
        display: block;
    }
    .form-control input {
        width: 100%;
        height: 40px;
        margin: 5px;
        padding: 3px 7px;
        font-size: 17px;
    }
    .form-control-check {
        display: flex;
        align-items: center;
        justify-content: space-between;

    }
    .form-control-check label{
        flex: 1;
    }
    .form-control-check input{
        flex: 2;
        height: 20px;
    }
</style>

