let space = " a";
let spaces = [];
let cant = 0;
let steps = [''];
let bricks = '#';

function PyramidInv(altura){
    for(var x = altura; x > 0; x--){
        cant = cant + 1;
        steps = bricks.repeat(cant)
        for(var j = cant; j > 0; j-- ){
            spaces[x] = spaces[x] + space;
        }
        console.log(steps + spaces[x]);
    }
}
console.log('........................................')
PyramidInv(10);