let cant = -1;
//let steps = ['#'];
let bricks = '#';

function Pyramid(height){
    var altura = parseInt(height);
    for(var x = 0; x < altura; x++){
        cant = cant + 1;
        steps = bricks.repeat(cant)
        console.log(steps);
    }
}

Pyramid(10);

let space = " ";
let spaces = [];


function PyramidInv(altura){

}
console.log('........................................')
PyramidInv(10);