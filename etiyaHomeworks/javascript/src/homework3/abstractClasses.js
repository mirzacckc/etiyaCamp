var Person = {
    name: "None",
    email: "None",
    sendEmail: function() {
        console.log("Mail sent to :" + this.name + "/" + this.email)
    }
}

function Customer(name,email) {
    this.name = name;
    this.email = email;
    //Other staff
}

function Employee(name,email) {
    this.name = name;
    this.email = email;
    //Other staff
}

Customer.prototype = Person;
var someCustomer = new Customer("mirza","m@gmail.com");
someCustomer.sendEmail();

Employee.prototype = Person;
var someEmployee = new Employee("isa","a@gmail.com");
someEmployee.sendEmail();
