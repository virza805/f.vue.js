<template>
  <div class="row p-3">
        <div class="col-lg-6">
          <form @submit.prevent="search"  class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Enter Subject" aria-label="Search" v-model="keyword">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
        <div class="col-lg-6">
          <button @click="showAddModal=true" class="btn btn-info float-right"><i class="fas fa-user"></i>&nbsp; Add New</button>
        </div>
      </div>
</template>

<script>
  export default {
    sdata() {
      return {
        keyword:''
      }
    },
    methods: {
      search(){
        this.$emit('search', this.keyword)
      }
    }

  }
</script>

<style>

</style>
