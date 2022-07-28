
var customer = {
    id: 1,
    contactName: "Mirza"
}

customer.city = "Turkey"

customer.sayHello = function (){
    alert("Hello " + this.contactName + " " +this.city)
}

customer.sayHello();