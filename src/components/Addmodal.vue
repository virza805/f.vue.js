<template>
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">Add New User</h5>
      <button type="button" class="close" @click="showAddModal=false"><span aria-hidden="true">&times;</span></button>
    </div>
    <div class="modal-body p-4">
      <form action="#" method="post">
        <div class="form-group">
          <input type="text" name="name" class="form-control form-control-lg" placeholder="Name">
        </div>
        <div class="form-group">
          <input type="email" name="email" class="form-control form-control-lg" placeholder="Email">
        </div>
        <div class="form-group">
          <input type="tel" name="phone" class="form-control form-control-lg" placeholder="Phone">
        </div>
        <div class="form-group">
          <input type="date" name="dob" class="form-control form-control-lg" placeholder="Date of Barth">
        </div>
        <div class="form-group">
          <label for="ban">Subject</label>
          <input type="text" name="sub" class="form-control form-control-lg" placeholder="Enter Subject Name">
        </div>
        <div class="form-group">
          <button class="btn btn-info btn-block btn-lg" @click="showAddModal=false;">Add User</button>
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
