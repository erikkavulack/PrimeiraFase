function calcularIMC(){
    let peso = document.getElementById("inpPeso").value
    let altura = document.getElementById("inpAltura").value

    // let imc = peso / (altura * altura)
    let imc = peso / (altura**2)

    // document.getElementById("inpResultado").value = "Seu IMC é: "+imc
    document.getElementById("pResultado").innerHTML = "Seu IMC é: "+imc.toFixed(2)
    
    // alert("Se fosse o Jack, ele diria que o imc é: "+imc)

    // console.log(peso);

}

function idadeDog(){
    let idadeDog = document.getElementById("inpIdadeDog").value
    let calculo = idadeDog * 7
    if (calculo >= 65){
        alert("O dog já pode se aposentar, ele tem "+calculo+" anos")
}
else {
    alert("O dog não pode se aposentar, pois ele tem "+calculo)
}
}

function executar1008(){
    let id, horas, valorHora, salario
    id = Number(prompt("Digite seu id: "))
    horas = Number(prompt("Quantas horas você trabalhou?"))
    valorHora = Number(prompt("Quanto você ganha por hora?"))
    salario = horas * valorHora
    alert("ID: "+ id + "\nSalário: R$" + salario.toFixed(2))
}

function executar1009(){
    let id, salarioFixo, comissao
    id = prompt("Digite seu nome e sobrenome: ")
    salarioFixo = Number(prompt("Digite o seu salário fixo: "))
    comissao = Number(prompt("Digite a sua comissão total: "))
    let salarioTotal = salarioFixo + (comissao * 0.15)
    alert("Funcionário: " + id + "\nSalário fixo: R$" + salarioFixo 
    + "\nSalário fixo + 15 % da comissão: R$" + salarioTotal.toFixed(2))
}

function executar1038(){
    let codigo = Number(prompt("Digite o código: "))
    let qtd = Number(prompt("Digite a quantidade: "))
    let preco
    if(codigo == 1){
        preco = 4
    }else if(codigo == 2){
        preco = 4.5
    }else if(codigo == 3){
        preco = 5
    }else if(codigo == 4){
        preco = 2
    }else if(codigo == 5){
        preco = 1.5
    }else{
        alert("Digita direito seu animal!")
    }
    let valor = preco * qtd
    alert("Total: R$" + valor.toFixed(2))
}

function executar1050(){
    let DDD = Number(prompt("Digite o DDD: "))
    if(DDD == 61){
        alert("Brasília")
    }else if(DDD == 71){
        alert("Salvador")
    }else if(DDD == 11){
        alert("São Paulo")
    }else if(DDD == 21){
        alert("Rio de Janeiro")
    }else if(DDD == 32){
        alert("Juiz de Fora")
    }else if(DDD == 19){
        alert("Campinas")
    }else if(DDD == 27){
        alert("Vitória")
    }else if(DDD == 31){
        alert("Belo Horizonte")
    }else{
        alert("DDD não cadastrado!")
    }
}

function executar1115(){
    let x = Number(prompt("Digite a coordenada em X: "))
    let y = Number(prompt("Digite a coordenada em Y: "))
    if(x > 0 && y > 0){
        alert("Primeiro quadrante.")
    }else if(x < 0 && y > 0){
        alert("Segundo quadrante.")
    }else if(x < 0 && y < 0){
        alert("Terceiro quadrante.")
    }else if(x > 0 && y < 0){
        alert("Quarto quadrante.")
    }else if(x == 0 || y == 0){
        alert("")
    }
}

function executar1142(){
    let n = Number(prompt("Digite um valor: "))
    
}