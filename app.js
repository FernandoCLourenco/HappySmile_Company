function fnSaudacao(){

let nomecompleto = null
nomecompleto = prompt("informe seu nome completo")
}
console.log(nomecompleto)

function fnMostrarHoraAtual(){
    let dataHoraCompleta = new Date()
    let horas = dataHoraCompleta.getHours()
    let minutos = dataHoraCompleta.getMinutes()
    let horaAtual = horas + ":" + minutos
    alert("Hora Atual : " + horaAtual )
}

function fnTrocarTitulo(){
    let titulo = prompt("Digite o titulo do site")
   document.getElementById("titulo").innerText = titulo
}

function fnIdiomaPortugues(){
    document.getElementById("menu1").innerText = "INICIAL"
    document.getElementById("menu2").innerText = "SERVIÇOS"
    document.getElementById("menu3").innerText = "CONTATO"

}

function fnIdiomaIngles(){
    document.getElementById("menu1").innerText = "HOME"
    document.getElementById("menu2").innerText = "SERVICES"
    document.getElementById("menu3").innerText = "CONTACT"

}
function fnBanner1(){
    document.getElementById("banner").src="imagens/banner-1.jpg"
}

function fnBanner2(){
    document.getElementById("banner").src="imagens/banner-2.jpg"
}
 
function fnBanner3(){
    document.getElementById("banner").src="imagens/banner-3.jpg"
}

function fnRegistrarContato(){
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let mensagem = document.getElementById("mensagem").value
    let informacoesCompleta = nome + " " + email + " " + mensagem
    document.getElementById("informacoes").innerHTML = informacoesCompleta

    document.getElementById("nome") = ""

}
 
//alert("Seja bem vindo(a) " + nomecompleto)

//document.write("Seja bem vindo(a) " + nomecompleto)

function fnTrocarDeCor(){
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



document.body.style.backgroundColor = corDeFundo

}