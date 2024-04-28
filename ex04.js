
/*4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
aprovação).*/

const prompt = require("prompt-sync")();

let nota01 = Number(prompt("Digite a primeira nota:"));
let nota02 = Number(prompt("Digite a segunda nota:"));

let media = (nota01+nota02)/2

if(media >= 6){
    console.log("PARABÉNS! Você foi aprovado")
}