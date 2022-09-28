/**
 * Armar un programa que imprima una piramide de Mario Bros. El programa debe:
 *  -Tomar como entrada la altura de la piramide(INT entre 2 y 8 inclusive).
 *  -Imprimir dos semi piramides de la altura especificada con '#' que esten separadas por dos espacios.
 *   EJEMPLO:
 *       # #
        ## ##
       ### ###
      #### ####
     ##### #####
    ###### ######
   ####### #######
  ######## ########
 ######### #########
########## ##########
*/
function Pyramid(height){
    let spaces = height;
    for(let i=0; i<=height; i++){
        console.log(' '.repeat(spaces--) + '#'.repeat(i) + ' ' + '' + '#'.repeat(i));
    }
}

Pyramid(10);
Pyramid(5);