 function perimetr(a , b , c ) {
     return a+b+c;
}

 let num1 = +prompt("Напишите сторону А")
 let num2 = +prompt("Напишите сторону B")
 let num3 = +prompt("Напишите сторону C")

alert(`Периметр треугольника `  +  perimetr(num1 , num2, num3)+   ` sm`)