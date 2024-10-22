let bancoDeDados = [];
function add(){
    let usuario = document.getElementById("username").value;
    let pos = bancoDeDados.indexOf(usuario.toUpperCase());
    if(pos == -1){
        bancoDeDados.push(usuario.toUpperCase());
        alert("Usuário cadastrado com sucesso!");
        document.getElementById("username").value = null  
    } 
    else {
        alert("Esse usuário já foi cadastrado!")
    }
}

function login(){
    let usuario = document.getElementById("user").value;
    let pos = bancoDeDados.indexOf(usuario.toUpperCase());
    if(pos == -1){
        alert("usuário não cadastrado!")
    } else {
        alert("Bem vindo ao sitema!");
        document.getElementById("user").value = null 
    }
}