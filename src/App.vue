<template>
  <div id="app">
    <div class="container">
      <navbar @search="search"></navbar>
    </div>
    <!-- end Head -->
    <!-- Start Show Contant form db -->
    <div class="container">
      <div class="row">
        <showdata :items="items"></showdata>
      </div>
    </div>
    <!-- End Show Contant from db -->
    <!-- Creat/Insert Data to database -->
    <div id="overlay" v-if="showAddModal">
      <div class="modal-dialog">
        <addmodal></addmodal>
      </div>
    </div>
    <!--Edit Student Model -->
    <div id="overlay" v-if="showEditModal">
      <div class="modal-dialog">
        <editmodal></editmodal>
      </div>
    </div>
     <!--Delete Student Modal -->
    <div id="overlay" v-if="showDeleteModal">
      <div class="modal-dialog">
        <deletemodal></deletemodal>
      </div>
    </div>

  </div>
</template>

<script>
  import Navbar from './components/Navbar'
  import Showdata from './components/Showdata'
  import Addmodal from './components/Addmodal'
  import Editmodal from './components/Editmodal'
  import Deletemodal from './components/Deletemodal'
  import datas from './datas.js'

export default {
  components: {
    Navbar,
    Showdata,
    Addmodal,
    Editmodal,
    Deletemodal
  },
  props: ['items'],
  datas() {
    return {
      items: []
    }
  },
  mounted() {
    this.items = datas
  },
  data:{
    showAddModal: false,
    showEditModal: false,
    showDeleteModal: false,
    users:[],
    newUser: {name:"", email: "", phone: ""},
    currentUser: {}
  },
  methods: {
    search(keyword){
      this.items = sdata.filter(item => {
        return item.sub.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      })
    }
  }


}
</script>

<style>
  #overlay{
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background: rgba(0, 0, 0, 0.6);
  }
</style>
