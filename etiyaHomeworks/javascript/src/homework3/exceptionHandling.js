function myFunction() {
    var message,x;
    message = "";
    x = document.getElementById("demo").value;
    try {
        if (x == "") throw "is empty"
        if (isNaN(x)) throw "is not a number"
        if (x>10) throw "is too high"
        if (x<5) throw "is too low"
    } 
    catch (err) {
        message = "Input " + err
        console.log(message)
    }
    finally{
        document.getElementById("demo").value = "";
    }
}

//Buradaki js dosyasını çalıştırmak için index.html 
//dosyasına yapılması gerkenler sırasıyla
//1-Head tagleri içersine <script src="src/homework3/exceptionHandling.js"></script> yazılmalı
//2-body tagleri içersinde yazı arsa silinmeli(bu dosya için önerrilmektedir)
//bir diğer deyişle farklı çalışması istenen js dosyası varsa o istem silinebilir
//3- <input id="demo" type="text">
//<button onclick="myFunction()">Test Button</button> bu 2 tag yazılmalı.




