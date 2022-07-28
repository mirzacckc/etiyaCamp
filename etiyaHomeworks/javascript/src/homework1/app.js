//saf javascript type safe bir dil değildir
//değişkenlerin tipleri ve değerleri değiştirilebilir
let sayi1 = 10;
sayi1 = "Mirza"
let student = {id:1, name:"Mirza"} //object tanımlaması bu şekilde yapılır
console.log(student)

// kod satırları duplicate hatası verecektir
// let sayi2=10;
// let sayi2= "Mirza";
// console.log(sayi2)

//default deger varsa sona yazılmalı.
function save(puan=10,ogrenci) {  //fonksiyon tanımlaması bu şekilde yapılır
    console.log(ogrenci.name + " : "+ puan)
}

save(undefined,student);  //fonksiyon bu şekilde çağırılır


let students = ["Semih","Mirza","Selim","Beyza"]  //array(dizi) bu şekilde tanımlanır
console.log(students)

let students2 = [student,{id:2, name:"Beyza"},"Ankara",{city:"İstanbul"}]
console.log(students2)




