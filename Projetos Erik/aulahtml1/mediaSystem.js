function volta(){
    window.location.href = "index.html"
}

function calculaMedia(){
    // let numero = Number(prompt("Digite um número"));
    // let sequencia = 0;
    // while(sequencia <= numero){
    //     if (sequencia % 2 == 0){
    //         alert(sequencia);
    //     }
    //     sequencia ++;
    // }
    
    // let numero = Number(prompt("Digite um número"));
    // for(let sequencia = 0; sequencia <= numero; sequencia ++){
    //     if (sequencia % 2 == 0){
    //         alert(sequencia);
    //     }
    // }

    let qtdTotal = Number(prompt("Digite a quantidade de atividades que deseja cadastrar!"));
    let map = Number(prompt("Digite a média necessária para approvação"));
    let media = 0;
    let totalPeso = 0;
    let qtdCad = 0;
    
    // while (qtdCad < qtdTotal){
    //     let atv = Number(prompt("Digite a nota da atividade!"));
    //     let peso = Number(prompt("Digite o peso da atividade!"));
    //     totalPeso += peso; // totalPeso = totalPeso + peso
    //     media += (atv*peso); // media = media + (atv*peso)
    //     qtdCad++; // qtdCad = qtdCad + 1
    //     }
    
    for(let qtdCad = 0; qtdCad < qtdTotal; qtdCad++){
        let atv = Number(prompt("Digite a nota da atividade!"));
        let peso = Number(prompt("Digite o peso da atividade!"));
        totalPeso += peso; // totalPeso = totalPeso + peso
        media += (atv*peso); // media = media + (atv*peso)
    }
    media /= totalPeso; // media = media / totalPeso 
    let mensagem = media + ": Portanto está reprovado!";
    if(media >= map){
        mensagem = media + ": Portanto está aprovado!";
    }
    else if(media >= map - 0.5){
        mensagem = media + ": Portanto está aprovado por conselho!";
    }
    alert(mensagem);
}