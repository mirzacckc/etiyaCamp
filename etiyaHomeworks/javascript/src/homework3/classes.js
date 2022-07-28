function Customer(firstName,lastName) { //constructor
    this.firstName = firstName; //public
    this.lastName = lastName;

    var someField = "some value"; //private

    this.sendProduct = function() { //operation
        console.log("Product sent!")
    }
}

var mirza = new Customer ("Mirza","Can");
mirza.sendProduct();


