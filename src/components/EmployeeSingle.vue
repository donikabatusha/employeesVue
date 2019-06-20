<template>
    <div class="card">
        <p>{{employee.name}}</p>
        <p>{{employee.username}}</p>
        <p>{{employee.email}}</p>
        <button class="edit__btn"><router-link :to="{path: '/edit/'+ employee.id}"> Edit</router-link></button>
    </div>

</template>


<script>
export default{
    name: 'EmployeeSingle',
    props: ['employee']
}
</script>


<style scoped>
.card {
    background: #fff;
    border-radius: 2px;
    display: inline-block;
    height: 200px;
    margin: 1rem;
    position: relative;
    width: 300px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    float:left;
  }
  .edit__btn{
    width: 80px;
    padding: 6px 5px;
    background: #2ecc71;
    border: 1px solid #2ecc71;
    cursor: pointer;
    color:#fff;
  }
  a{
    text-decoration: none;
    color:#fff;
  }
  a:hover{
    text-decoration:none;
    color:#fff;
  }
</style>