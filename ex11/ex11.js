let nome = prompt("Digite o nome do aluno")
let nota1 = prompt("Digite a primeira nota do bimestre")
let nota2 = prompt("Digite a segunda nota do bimestre")
let nota3 = prompt("Digite a terceira nota do bimestre")
let nota4 = prompt("Digite a quarta nota do bimestre")

media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4

if (media >= 4){
    alert(nome + " foi aprovado")
}else{
    alert(nome + " foi reprovado")
}