// EJERCICIO 2
let money50 = 50;
let money20 = 20;
let money10 = 10;
let money5 = 5;
let money1 = 1;

function ATM(amount){
    let Ope50 = Math.round(amount/50);
    let rest50 = amount % money50;

    let Ope20 = Math.round(rest50/20);
    let rest20 = rest50 % money20;

    let Ope10 = Math.round(rest20/10);
    let rest10 = rest20 % money10;

    let Ope5 = Math.round(rest10/5);
    let rest5 = rest10 % money5;

    let Ope1 = Math.round(rest5/1);
    console.log(Ope50, Ope20, Ope10, Ope5, Ope1);
   
    console.log("Cantidad de dinero: $" + amount);
    console.log('Billetes de $50: ' + Ope50);
    console.log('Billetes de $20: ' + Ope20);
    console.log('Billetes de $10: ' + Ope10);
    console.log('Billetes de $5: ' + Ope5);
    console.log('Billetes de $1: ' + Ope1);
}

ATM(221);
