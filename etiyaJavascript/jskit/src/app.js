function addToCart(quantity,productName="Armut") {
    console.log(quantity);
    console.log(productName);
}

//addToCart(1);
 
let addToCart2 = (quantity) => {
    console.log(quantity)
}

addToCart2();

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

// function addToProduct1(product) {
//     let checkExists = false;
//     for (let i = 0; i < products.length; i++) {
//         if (products[i].productName==product.productName) {
//             checkExists=true;
//         }
        
//     }
//     if (checkExists!==true) {
//         products.push(product)
//     }
//     else{
//         console.log("Ürün zaten var")
//     }
// }

//Kısa haliyle aşağıdaki gibi yapılabilir.
//products.push({productName:"Üzüm", unitPrice:100, quantity:15})

function addToProduct(product) {
    let productToFind = products.find(p=>p.productName === product.productName)
    if (productToFind==undefined) {
        products.push(product)
    }
    else{
        console.log("Ürün zaten var")
    }
}

addToProduct({productName:"Vişne", unitPrice:100, quantity:15})
console.log(products)

let filteredProducts = products.filter(p=>p.unitPrice<100)

console.log(filteredProducts)

let searchKey = "ar"

let findKeys = products.filter(p=>p.productName.toLowerCase().includes(searchKey))
console.log(findKeys)

const meyveler =[
   "Elma","Armut","Karpuz"
]

//foreach
// meyveler.forEach(
//     (item)=>{
//         //Arrow function
//         console.log(item)
// })


//map
const meyveler2 = meyveler.map(meyve =>{
    return meyve + " Meyvesi"
})

meyveler.forEach(item=> console.log(item))
meyveler2.forEach(item=> console.log(item))


const sayilar = [1,2,3,4,5,6,8,7,10,15]
//reduce
const toplam = sayilar.reduce((onceki,suanki)=>{
    return onceki+suanki
})

console.log(toplam)

// Classes

let products1 = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

class Product{ 
    //Sınıf
    //Properties- Özellikler
    constructor(productName,unitPrice,quantity){
        this.productName = productName;
        this.unitPrice = unitPrice;
        this.quantity = quantity;
        //Kurucu
        console.log("Product sifinin yapici methodu")
    }

    //Methods-Methodlar
    satinAl(){
        console.log(this.productName, "Satin Alindi");
        console.log(this.productName + " Satin Alindi");
    }

}

//Classları kullanarak nesneler/object üretiyoruz.
//üstüne gelip F12 basıldığında tanımlanan yeri gösterir
const product1 = new Product("Telefon",5000,1); //Nesne, Instance
const product2 = new Product("Tablet",3000,1);
const product3 = new Product("Laptop",10000,1);
const teknolojikUrunler = [product1,product2,product3];

console.log(teknolojikUrunler)
product1.satinAl();
