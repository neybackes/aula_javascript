//Funções
function soma(n1, n2){
    return n1 + n2;
}
var validar = 0; //UTILIZANDO A vAR GLOBAL
//UTILIZAR VAR LOCAL PODE GERAR ERRO SE JÁ ESTIVER DECLARADA FORA DA FUNÇÃO
function validaIdade(idade){
    // var validar; <<<<<
    if(validar >= 18){
        validar = true
    }else{
        validar = false
        alert("VOCÊ NÃO PODE ACESSAR A PÁGINA")
    }
}

var idade =  prompt("Qual a sua idade?");
console.log(validaIdade(idade));

alert(soma(5,10))

/*var d =  new Date();
alert(d.getMonth() + 1);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());*/

/* Estrutura repetição for
var count
for (count = 0; count <=5; count++ ){
    console.log(count);
    alert(count);
} */

/*Estrutura de repetição while
var count = 0;
while(count <= 5){
    console.log(count);
    alert(count);
    count++;    
}; */


/* CONDICIONAL
var idade = prompt("Qual a sua idade? ") //exibir mensagem em forma de pergunta

if (idade >= 18){
    alert("maior de idade");
}
else{
    alert("menor de idade");
} */


/*var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]//exemṕlo lista dicionários
console.log(frutas);
alert(frutas[1].nome)

/*var fruta = {nome:"maça", cor:"vermelha"} //exemplo dicionário
console.log(fruta.nome);
alert(fruta.cor); */




//var lista = ["maça", "pêra", "laranaja"] //arrays
//lista.push("uva"); //acrescentar um elemento
//lista.pop(); //remover o último elemento
//console.log(lista[1]);
//alert(lista[1])
//console.log(lista.length); //quantidade de elementos na lista
//console.log(lista.reverse()); //ordem dos elementeos de trás para frente

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - ")); //separa elementos difernete da ,




/*var nome = "Ney Backes";
var n1 =  5;
var n2 =  3;
var frase =  "Japão é o melhor time do mundo"
//alert(nome + " tem " + idade + " anos ");
// alert(idade + idade2);

console.log(nome);
console.log(n1 * n2);
console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));*/