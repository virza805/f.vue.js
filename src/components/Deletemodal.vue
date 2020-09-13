<template>
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">Delete User</h5>
      <button type="button" class="close" @click="showDeleteModal=false"><span aria-hidden="true">&times;</span></button>
    </div>
    <div class="modal-body p-4">
      <h4 class="text-danger">Are you sure want to delete this user ?</h4>
      <h5>You deleting '{{ currentUser.name }}'</h5>
      <button class="btn btn-danger btn-lg" @click="showDeleteModal=false; deleteUser(); clearMsg();">Yes</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
      <button class="btn btn-success btn-lg" @click="showDeleteModal=false">No</button>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="css" scoped>

</style>
