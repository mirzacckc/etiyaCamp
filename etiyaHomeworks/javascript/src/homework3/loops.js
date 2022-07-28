//for loop

for (let i = 0; i <= 10; i++) {
    console.log(i);
    
}

//for loops with break

for (let i = 0; i <= 10; i++) {
    if (i==5) {
        break;
        
    }
    console.log(i);    
}

//for loops with continue

for (let i = 0; i <= 10; i++) {
    if (i==5) {        
        continue;
    }
    console.log(i);    
}

//while loop
var number = 1;
while (number < 10) {
    alert(number);
    number = number+1;
}

//do while loop
var age = prompt("your age?");
var result = "";
do {
    result += age;
    result += "-";
    age--;
} while (age >0)
console.log(result);




