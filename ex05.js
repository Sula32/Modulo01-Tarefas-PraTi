/*5. Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
média calculada seja menor que 6,0*/


const prompt = require("prompt-sync")();

let nota01 = Number(prompt("Digite a primeira nota:"));
let nota02 = Number(prompt("Digite a segunda nota:"));

let media = (nota01+nota02)/2

if(media >= 6){
    console.log("PARABÉNS! Você foi aprovado")
}else{
    console.log("Você foi REPROVADO! Estude mais")
}