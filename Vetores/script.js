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