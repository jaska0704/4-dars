// alert("Hello World")
// confirm("JS ni o'rganishga tayyormisiz?")
// prompt("Parol kiriting: ")

// console.log("Hammaga Salom!")

// let fName = prompt("Ismingizni Kiriting: ");
// let lName = prompt("Familiyangizni Kiriting: ");
/* Data types  ikkiga bo'linadi
1. Primitive 
-string
-number
-boolean
-undefined
-null

2.Reference-->bog'liqlik
-array-->to'plam
-object */
let ism = prompt("Ismingizni kiriting: ");
let email = prompt("Emailingizni kiriting: ");
let yosh = prompt("Yoshingizni kiriting: ");
let holati = prompt("Turmush qurganmisiz?: ");
let qiziqishi = prompt("Qiziqishlaringizni kiriting: ");
let viloyat_shahar = prompt("Yashash shahar yoki viloyatni kiriting: ");
let tuman = prompt("Tumaningizni kiriting: ");
let kocha = prompt("Ko'changizni kiriting: ");

let faza2 = {
    Viloyat_yoki_shahar: viloyat_shahar,
    Tumani: tuman,
    Kocha: kocha
};



let person = {
    Ismi: ism,
    Emaili: email,
    Yoshi: yosh,
    uylanganmi: holati,
    qiziqishlari:qiziqishi,
    yashash_joyi:faza2
};

console.log(person);

console.log("Mening ismim" + " " + ism + "." + " " + "Email pochtam" + " " + email + "." + " " + "Yoshim" + " " + yosh + "da" + "." + " " + "Qiziqishlarim:" + qiziqishi + "." + " " + "Men" + " " + viloyat_shahar + "shahrida," + " " + tuman + " " + "tumanida," + " " + kocha + " " + "ko'chasida yashayman.")