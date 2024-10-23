let bancoDeDados = [];
function add() {
    let usuario = document.getElementById("username").value;
    if (existe(usuario) == false) {
        bancoDeDados.push(usuario.toUpperCase());
        alert("Usuário cadastrado com sucesso!");
        document.getElementById("username").value = null
    }
    else {
        alert("Esse usuário já foi cadastrado!")
    }
}

function login() {
    let usuario = document.getElementById("user").value;
    if (existe(usuario) == false) {
        alert("usuário não cadastrado!")
    } else {
        alert("Bem vindo ao sitema!");
    }
    document.getElementById("user").value = null
}

function remove() {
    let usuario = document.getElementById("userDelete").value;
    let pos = bancoDeDados.indexOf(usuario.toUpperCase());
    if (pos == -1) {
        alert("usuário não cadastrado!");
    } 
    else {
        bancoDeDados.splice(pos, 1);
        alert("Usuário excluído com sucesso!");
    }
    document.getElementById("userDelete").value = null;
}

function edit() {
    let usuario = document.getElementById("userEdit").value;
    let pos = bancoDeDados.indexOf(usuario.toUpperCase());
    if(pos == -1){
        alert("Usuário não encontrado no banco de dados!");
    }
    else {
        let novoValor = prompt("Digite o novo valor").toUpperCase();
        bancoDeDados[pos] = novoValor;
        alert("Usuário alterado com sucesso!");
    }
    document.getElementById("userEdit").value = null;
}

function existe(username){
    let pos = bancoDeDados.indexOf(username.toUpperCase());
    if(pos == -1){
        return false;
    }
    else{
        return true;
    }
}