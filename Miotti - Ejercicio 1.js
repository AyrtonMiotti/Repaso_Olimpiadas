let space = " ";
let spaces = [];
let cant = 0;
let cant2 = 0;
let steps = [''];
let stepsright = [''];
let bricks = '#';

function Pyramid(height){
    var altura = parseInt(height);
    for(var x = 0; x < altura; x++){
        cant = cant + 1;
        stepsright = bricks.repeat(cant)
        console.log(stepsright);
    }
    cant = altura;
    for(var n = altura; n > 0; n--){
        cant = cant - 1;
        cant2 += 1;
        steps = bricks.repeat(cant2);
        for(var j = cant; j > 0; j-- ){
            spaces[n] = spaces[n] + space;
        }
        console.log(spaces[n] + steps);
    }
}

Pyramid(10);