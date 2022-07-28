//Mükemmel sayı, sayılar teorisinde, kendisi hariç pozitif tam bölenlerinin toplamı 
//kendisine eşit olan sayı. 
//Diğer bir ifadeyle, bir mükemmel sayı, bütün pozitif tam bölenlerinin toplamının yarısına eşittir.
function perfectNumber() {    
    
    for (let j = 1; j < 1000; j++) {
        let i=1;
        let sum=0;
        while(i <= j/2){
            if (j%i==0) {
               sum=sum+i 
            }
            i=i+1
        }
        if (j==sum) {
            console.log(j + " Mükemmel sayidir")
        }
    }
    
}

perfectNumber();