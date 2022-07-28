//Asal sayılar sadece kendine ve 1'e bölünebilen pozitif tam sayılardır.
function findPrime(...sayi) {
    for (let j = 0; j < sayi.length; j++) {
        
        let sayac=0;
        for (let i = 2; i < sayi[j]; i++) {
            if (sayi[j]%i==0) {
                sayac+=1
            }
            
        }
        if(sayac==0){
            console.log(sayi[j] + " Asaldir")
        }
        else{
            console.log(sayi[j] + " Asal Olmayan Sayi")

        }
    }
}

findPrime(15,5,8,7);