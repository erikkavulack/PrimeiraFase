function pesca(){
    let pesoPermitido = Number(prompt("Digite o peso permido: "))
    let peso = Number(prompt("Digite o peso pescado: "))
    if(pesoPermitido < peso){
        let excesso = peso - pesoPermitido
        let multa = excesso * 4
        alert("O peso excedeu em " + excesso + "Kg, portanto a multa será de: " + multa)
    }
    else{
        alert("Ta safe meu parça 👌.")
    }
}

function verificaIdade(){
    let nome = prompt("Digite o seu nome: ");
    let ano = Number(prompt("Bem vindo, " + nome + " digite o seu ano de nascimento!"));
    let idade = 2024 - ano;
    if(idade > 18){
        alert(nome+" você tem "+idade+" anos, portanto é maior de idade!");
    }
    else if(idade < 18){
        alert(nome+" você tem "+idade+" anos, portanto é menor de idade!");
    }
    else{
        alert("Esse é o ano que você completa 18 anos de idade!");
    }
}

function contagem(){
    let numero = prompt("Digite o limite da contagem");
    let tabela = ""
    for(let i = 0; i < numero; i += 3){
        tabela += i+"\n";        
    }
    alert(tabela);   
}

function arrays(){
    let caixaDeBomBons = []
    let qtd = Number(prompt("Quantos bombons deseja inserir na caixa?"));
    for(let i = 0; i < qtd; i++){
        let nomeBombom = prompt("Digite o nome do bombom a ser inserido!");
        caixaDeBomBons.push(nomeBombom);
    }
    alert(caixaDeBomBons)
    let exclusao = prompt("Digite o nome do bombom que você quer excluir!");
    let pos = caixaDeBomBons.indexOf(exclusao);
    if(pos == -1){
        alert("Esse bombom já foi comido!");
    }
    else{
        caixaDeBomBons.splice(pos, 1);
    }
    alert(caixaDeBomBons);
    let tamanhoAtual = caixaDeBomBons.length;
    alert("Agora a caixa de bombons possui "+ tamanhoAtual+ " bombons!")
}