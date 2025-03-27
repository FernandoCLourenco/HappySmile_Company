console.log("Fernandola")
console.log(16)
console.warn("atenção")
console.error("um erro")
/*
3 formas de criar variaveis
var
let - > vamos usar essa
const 
*/
let nome = "Fernandola"
let idade = "16"
let telefone = null
console.log(nome, idade)
nome = "Fernando C Lourenço"
console.log(nome)

let nomecompleto = null
nomecompleto = prompt("informe seu nome completo")
console.log(nomecompleto
)

//alert("Seja bem vindo(a) " + nomecompleto)

//document.write("Seja bem vindo(a) " + nomecompleto)

let cor = prompt("Informe uma cor: \n1 azul \n 2 vermelho \n 3 preto \n 4 verde \n 5 roxo \n 6 laranja")

let corDeFundo = null

if (cor == "1"){
    corDeFundo == "blue"
}
else if(cor == "2"){
   corDeFundo = "red"
}
else if(cor == "3"){
    corDeFundo = "black"
}
else if(cor == "4"){
    corDeFundo = "green"
}
else if(cor == "5"){
    corDeFundo = "roxo"
}
else if(cor == "6"){
    corDeFundo = "orange"
}
else{
    corDeFundo = "yellow"
}


document.body.style.backgroundColor = cor