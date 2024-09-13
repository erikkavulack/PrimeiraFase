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