document.addEventListener('DOMContentLoaded', (event) => {
    // Código para carregar dados na tabela
    let dados = JSON.parse(localStorage.getItem('usuarios')) || [];
    let tabela = document.getElementById('tabelaDados').getElementsByTagName('tbody')[0];    
       for (let dado of dados) {
        let linha = tabela.insertRow();
        let celulaNome = linha.insertCell(0);
        let celulaEmail = linha.insertCell(1);
        let celulaSenha = linha.insertCell(2);
        celulaNome.innerHTML = dado.nome;
        celulaEmail.innerHTML = dado.email;
        celulaSenha.innerHTML = dado.senha;
    }
});
