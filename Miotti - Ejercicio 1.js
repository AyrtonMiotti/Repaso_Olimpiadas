// EJERCICIO 1
function Pyramid(height){
    let spaces = height;
    for(let i=0; i<=height; i++){
        console.log(' '.repeat(spaces--) + '#'.repeat(i) + ' ' + '' + '#'.repeat(i));
    }
}

Pyramid(10);
Pyramid(5);
