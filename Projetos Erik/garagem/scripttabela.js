document.addEventListener('DOMContentLoaded', (event) => {
    let dados = JSON.parse(localStorage.getItem('garagem')) || [];
    let tabela = document.getElementById('tabelaDados').getElementsByTagName('tbody')[0];    
       for (let dado of dados) {
        let linha = tabela.insertRow();
        let celulaPlaca = linha.insertCell(0);
        let celulaMarca = linha.insertCell(1);
        let celulaModelo = linha.insertCell(2);
        let celulaAno = linha.insertCell(3);
        celulaPlaca.innerHTML = dado.placa;
        celulaMarca.innerHTML = dado.marca;
        celulaModelo.innerHTML = dado.modelo;
        celulaAno.innerHTML = dado.ano;
    }

});
