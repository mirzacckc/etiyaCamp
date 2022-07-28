//Arkadaş sayı iki sayı birbirinin kendisi hariç bölenleri toplamına eşitse bu sayılara denir.
function friendsNumber(firstNumber,secondNumber) {
    let biggerNumber;
    let sum1=0;
    let sum2=0;
    let i=1;
    if (firstNumber>secondNumber) {
        biggerNumber=firstNumber
    }
    else{
        biggerNumber=secondNumber
    }
    while(i <= biggerNumber/2){
        if (firstNumber%i==0) {
           sum1=sum1+i 
        }
        if (secondNumber%i==0) {
            sum2=sum2+i 
        }
        i=i+1
    }
    if (firstNumber==sum2 && secondNumber==sum1) {
        console.log(firstNumber + " ve " + secondNumber + " Arkadas sayidir")
    }
    else{
        console.log(firstNumber + " ve " + secondNumber + " Arkadas sayi degildir!!")
    }
}

friendsNumber(17296,18416)