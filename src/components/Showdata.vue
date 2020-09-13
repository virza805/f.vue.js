<template>
  <div class="col-lg-12">
          <table class="table table-bordered table-striped">
            <thead>
              <tr class="text-center bg-info text-light">
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>DOB</th>
                <th>Subject</th>
                <th>Edit</th>
                <th>Delet</th>
              </tr>
            </thead>
            <tbody>
              <tr class="text-center"  v-for="(item, index) in items" :key="index">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.pho }}</td>
                <td>{{ item.dob }}</td>
                <td>{{ item.sub }}</td>
                <td><a href="#" class="text-success" @click="showEditModal=true; selectUser(user);"><i class="fas fa-edit"></i></a></td>
                <td><a href="#" class="text-danger" @click="showDeleteModal=true; selectUser(user);"><i class="fas fa-trash-alt"></i></a></td>
              </tr>
            </tbody>
          </table>
        </div>
</template>

<script>
  export default {
    props: ['items']
  }
</script>

<style lang="css" scoped>

</style>
