let lista = []

function add(){
    let convidados = document.getElementById("txt").value;
    let existe = false;
    for (let item of lista) {
        if (item.toUpperCase() == convidados.toUpperCase()) {
            existe = true;
            break;
        }
    }
    if (existe == false) {
        lista.push(convidados.toUpperCase());
        document.getElementById("lista").innerHTML = lista;
    }
    else {
        alert("Este convidado já está cadastrado!");
    }
}

function remove(){
    let convidados = document.getElementById("txt").value;
    let posicao = -1;
    for (let item of lista) {
        if (item.toUpperCase() == convidados.toUpperCase()) {
            posicao = lista.indexOf(item);
            break;
        }
    }
    if (posicao == -1) {
        alert("Não foi encontrado convidado com o nome: " + convidados)
    }
    else {
        lista.splice(posicao, 1);
        document.getElementById("lista").innerHTML = lista;
    }
}

function edit(){
    let convidados = document.getElementById("txt").value;
    for (let pos = 0; pos < lista.length; pos++) {
        if(lista[pos].toUpperCase() == convidados.toUpperCase()){
            lista[pos] = prompt("Digite o novo valor para ").toUpperCase();
            break;
        }
    }
    document.getElementById("lista").innerHTML = lista;
}

