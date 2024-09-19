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
    + "\nSalário total + comissão: R$" + salarioTotal.toFixed(2))
}