<template>
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">Edit User</h5>
      <button type="button" class="close" @click="showEditModal=false"><span aria-hidden="true">&times;</span></button>
    </div>
    <div class="modal-body p-4">
      <form action="#" method="post">
        <div class="form-group">
          <input type="text" name="name" class="form-control form-control-lg" v-model="currentUser.name">
        </div>
        <div class="form-group">
          <input type="email" name="email" class="form-control form-control-lg" v-model="currentUser.email">
        </div>
        <div class="form-group">
          <input type="tel" name="phone" class="form-control form-control-lg" v-model="currentUser.phone">
        </div>
        <div class="form-group">
          <input type="date" name="dob" class="form-control form-control-lg" v-model="currentUser.dob">
        </div>
        <div class="form-group">
          <label for="sub">Subject = </label>
          <input type="text" name="sub" v-model="currentUser.sub">
        </div>
        <div class="form-group">
          <button class="btn btn-info btn-block btn-lg" @click="showEditModal=false;">Update User</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="css" scoped>

</style>
