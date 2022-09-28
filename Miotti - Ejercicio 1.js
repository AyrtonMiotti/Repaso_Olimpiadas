// Con Función Repeat y poco código:

function Pyramid(height){
    let spaces = height;
    for(let i=0; i<=height; i++){
        console.log(' '.repeat(spaces--) + '#'.repeat(i) + '  ' + '' + '#'.repeat(i));
    }
    console.log('*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.')
}

Pyramid(8);
Pyramid(2);