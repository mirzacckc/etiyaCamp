import { users } from "../data/users.js";

export default class EmployeeService{
    constructor(){
        this.emploies = users.filter(user=>user.type==="employee");

    }

    getAll(){
        return this.emploies;
    }

    add(employee){
        this.emploies.push(employee)
    }

    update(employee){
        let employeeToUpdate = this.emploies.find(e=>e.id===employee.id)
        if (employeeToUpdate) {
            employeeToUpdate.firstName = employee.firstName;
            employeeToUpdate.lastName = employee.lastName;
            employeeToUpdate.age = employee.age;
            employeeToUpdate.city = employee.city;
            employeeToUpdate.salary = employee.salary;
        }

    }

    delete(employee){
        this.emploies = this.employee.filter(e=>e.id!==employee.id)
    }
}