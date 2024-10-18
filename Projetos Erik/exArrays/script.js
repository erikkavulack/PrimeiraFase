let numeros = []
let index1, index2, soma

function executar83() {
    let numero
    for (let i = 0; i < 25; i++) {
        numero = Math.ceil(Math.random() * 6)
        numeros.push(numero)
    }
    console.log(numeros);
    document.getElementById("resultado").innerHTML = "Array gerado com absurdo sucesso"
}

function executar83b() {
    do {
        index1 = Number(prompt("Digite um número entre 0 e 24: "))
    } while (index1 < 0 || index1 > 24)
    do {
        index2 = Number(prompt("Digite um número entre 0 e 24: "))
    } while (index2 < 0 || index2 > 24)
    soma = numeros[index1] + numeros[index2]
    console.log("Soma: ", soma);
}

function mostrarArray(){
    document.getElementById('resultado').innerHTML = '<h2>Lançamento do dado:</h2>'
    for(let i = 0; i < numeros.length; i++){
        document.getElementById("resultado").innerHTML += "Dado: " + numeros[i] + "<br>"
    }
}

function pesquisarComFor(){
    let valor = number(prompt("Digite o valor para pesquisar: "))
    let indice
    for(let i = 0; i<numeros.length; i++){
        if(numeros[i] == valor){
            indice = i 
        }
    }
    if(indice == -1){
        alert("Não encontrado")
    } else {
        alert("Encontrado: ")
    }
}

function pesquisar(){
    
}