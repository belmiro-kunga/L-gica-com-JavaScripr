//pedir para o usuario digitar um numero
let numero_1 = prompt("Digite um Número? ");

//converter em numero inteiro
numero_1 =  parseInt(numero_1);  //ou  numero_1 = Number(numero_1)

//pedir para o usuario digitar outro número
let numero_2 = prompt("Digite outro Número? ");

//converter em número inteiro
numero_2 = parseInt(numero_2); //ou numero_2 = Number(numero_2)

//mostrar a subtração concatenando com o texto "a subtração é: ..."
alert("A soma é: " + (numero_1 + numero_2));          

//mostrar a multiplicação concatenando com o texto "a multiplicação é: ..."
alert( "A Multiplicação é: " + (numero_1 *  numero_2));  

//mostrar a divisão concatenando com o texto "a divisão é: ..."
alert( "A subtração é: " + (numero_1 -  numero_2));  

//mostrar a soma concatenando com o texto "a soma é: ..."
alert( "A divisão é: " + (numero_1 / numero_2)); 