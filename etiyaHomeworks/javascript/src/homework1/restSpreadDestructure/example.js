//rest
//params
//varArgs
//rest: Rest Parametresi, fonksiyonlara sınır sayısı olmadan parametre 
//geçmemize olanak verir ve bizim isteğimiz harici kalan tüm öğeleri bir dizide toplar.
let showProducts = function(id,...products){
    console.log(id)
    console.log(products)
}

//console.log(typeof showProducts)
//showProducts(10,["Elma","Armut","Karpuz"])

//spread
//String, Array veya Object olarak kendisine gönderilen veriyi ayırır.
let points = [1,2,3,4,5,60,78,36,85]

console.log(...points)
console.log(Math.max(...points))
console.log("ABC","D",..."EFG","H")

//Destructuring
let populations = [10000,20000,30000,[40000,100000]]
let [small,medium,high,[veryHigh,maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number) {
    console.log(small1)
}

someFunction(populations)

let category = {id:1, name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id,name} = category
console.log(id)
console.log(name)