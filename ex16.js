/*Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.*/

let numero = 101;
let contador = 0;

while(contador <= 50){
    
    let divisor = 1
    let contdivisoes = 0
    while(divisor<=numero){
        if(numero%divisor==0){
            contdivisoes++
        }
    divisor++
    }

    if(contdivisoes == 2){
        console.log(numero)
        contador++
    }

    numero++

}