import EmployeeList from './components/EmployeeList';
import EditEmployee from './components/EditEmployee';

export default [
    { path:'/', component: EmployeeList},
    { path:'/edit/:userId', component: EditEmployee }
]