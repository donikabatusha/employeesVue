<template>
    <div>
       <div v-bind:key="employee.id" v-for="employee in employees">
        <EmployeeSingle v-bind:employee="employee" />
       </div>
    </div>
</template>

<script>
import EmployeeSingle from './EmployeeSingle';
import axios from 'axios';
export default {
    name: 'EmployeeList',
    components: {
        EmployeeSingle
    },
    data(){
        return {
            employees: []
        }
    },
    created(){
      axios.get('https://jsonplaceholder.typicode.com/users?_limit=12')
        .then(res => this.employees = res.data)
        // .catch(err => console.log(err));
    }
}

</script>

<style scoped>

</style>