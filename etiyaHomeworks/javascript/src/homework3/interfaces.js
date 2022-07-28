function sendEmail(personInterfaces) {
    var to = personInterfaces.eMail;
    var name = personInterfaces.name;

    var send = function(){
        console.log("Mail sent to :" + name + "/" + to);
    }

    send();
}

function Customer(name,eMail) {
    this.name = name;
    this.eMail = eMail;
    //Other staff
}

function Employee(name,eMail) {
    this.name = name;
    this.eMail = eMail;
    //Other staff
}

var someCustomer = new Customer("mirza","e@gmail.com");
var someEmployee = new Employee("beyza","b@gmail.com");
sendEmail(someCustomer);
sendEmail(someEmployee);