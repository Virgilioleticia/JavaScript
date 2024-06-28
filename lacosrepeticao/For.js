const leia = require('readline-sync');

let numero, cotador;

numero = leia.questionInt("calcule a tabuada do: ")

for(contador = 1; contador <= 10; contador++){
 console.log(numero + " x " + contador + " = " + numero * contador); 
}