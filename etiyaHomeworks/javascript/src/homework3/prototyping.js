function Customer(first,last,city,country,age){
    this.first = first;
    this.last = last;
    this.city = city;
    this.age = age;
    this.country = country;
}

var someCustomer = new Customer("Mirza","Can","Ankara","Turkey",30);

Customer.prototype.eMail = "m@gmail.com";
Customer.prototype.fullName = function(){
    return this.first + " " + this.last;
};

console.log(someCustomer.city);
console.log(someCustomer.eMail);
console.log(someCustomer.fullName());