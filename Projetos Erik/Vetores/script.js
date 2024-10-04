// Array (vetor)
//Tamanho do vetor é uma coisa, posição é outra.
// .push(item) Adiciona um item ao final
// .indexOf(item) Retorna a posição do item
// .splice(pos, qnt) Remove o item da posição informada pra frente
// .pop() Remove o item da última posição
let batatas = [];
function add() {
    let produto = document.getElementById("txt").value;
    let posicao = batatas.indexOf(produto);
    if (posicao == -1) {
        batatas.push(produto);
        document.getElementById("lista").innerHTML = batatas;
    }
    else {
        alert("Este produto já está cadastrado!");
    }
}

function remove() {
    let produto = document.getElementById("txt").value;
    let posicao = batatas.indexOf(produto);
    if (posicao == -1) {
        alert("Não foi encontrado produto com o nome: " + produto)
    }
    else {
        batatas.splice(posicao, 1);
        document.getElementById("lista").innerHTML = batatas;
    }
}

let idades = [14, 22, 34, 20, 23, 55, 45];

function pesquisar() {
    // console.log(idades);
    // let nome = prompt("Digite seu nome: ");
    // console.log(nome);

    let n = Number(prompt("Qual número você quer pesquisar?"));
    let indice = idades.indexOf(n);
    if (indice != -1) {
        console.log("Achei! está na posição: " + indice);
    } else {
        console.log("Valor não encontrado :p");
    }
    // console.log(idades.indexOf(n));

}

function cadastrar() {
    let numero = Number(prompt("Digite o número para cadastrar: "));
    idades.push(numero);;
    console.log(idades);
}

function mostrarTodos() {
    // console.log(idades);
    // alert(idades);
    for (let i = 0; i < idades.length; i++){
        // console.log(idades[i]);
        document.getElementById("saida").innerHTML += 
        "Aluno: " + idades[i] + "<br>";
    }
}

