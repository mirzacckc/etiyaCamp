//This in a function an object
var student = {
    firstName: "Mirza",
    lastName: "Can",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

alert(student.fullName());

//Object constructor
//this is an object

function Customer(first,last,city,country,age){
    this.first = first;
    this.last = last;
    this.city = city;
    this.age = age;
    this.country = country;
}
var someCustomer = new Customer("Mirza","Can","Ankara","Turkey",25)

console.log(someCustomer.country)