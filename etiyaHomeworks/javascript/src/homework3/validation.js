function validate() {
    var numberEntered = document.getElementById("numberBox")

    if (numberEntered.checkValidity() == false) {
        console.log(numberEntered.validationMessage)
    }
    else{
        console.log("Input OK")
    }
}