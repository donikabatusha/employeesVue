<template>
  <div class="main-div">
      <form class="editUser">
        <div class="form-group main-element">
          <label>Name:</label>
          <input type="text" class="field" v-model="employeesName" name="employeesName" :placeholder="employees.name">
        </div>
        <div class="form-group main-element">
          <label>Username:</label>
          <input type="text" class="field" v-model="employeesUsername" name="employeesUsername" :placeholder="employees.username">
        </div>
        <div class="form-group main-element">
          <label>Email:</label>
          <input type="email" class="field" v-model="employeesEmail" name="employeesEmail" :placeholder="employees.email">
        </div>
        <button class="edit__btn" v-on:click="updateUser">Update</button>
      </form>
      <div :class="show ? 'displayMessage' : 'displayNone'">
        User updated
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "EditEmployee",
  props: ["employee"],
  data() {
    return {
      employees: [],
      show: false,
    };
  },
  created() {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/users/" +
          this.$route.params.userId
      )
      .then(res => (this.employees = res.data));
  },
  methods:{
    updateUser(e){
      e.preventDefault();
      this.show = true;
      axios.put("https://jsonplaceholder.typicode.com/users/" +
          this.$route.params.userId, {
            name: this.employeesName,
            username: this.employeesUsername,
            email: this.employeesEmail,
            })
            .then(function (response) {
             console.log(response);
        })
    }
  }
};
</script>

<style scoped>
  .field{
    padding: 6px;
  }
  .displayMessage{
    display: block;
    width: 300px;
    margin: 20px auto;
    padding:10px 0;
    background-color: #dff0d8;
    color: #3c763d;

  }
  .displayNone{
    display: none;
  }
  .edit__btn{
    width: 100px;
    padding: 6px 5px;
    background: #2ecc71;
    border: 1px solid #2ecc71;
    cursor: pointer;
    color:#fff;
    margin: 10px auto;
  }
  .main-element{
    margin:20px 10px;
  }
  .main-element label{
    margin-right:10px;
    text-align:left;
  }
  .main-div{
    width:50%;
    margin: 30px auto;
  }
</style>