document.addEventListener('DOMContentLoaded', (event) => {
    // Esta função é executada quando o documento HTML é completamente carregado
    function carregarTabela() {
        // Função para carregar e exibir os dados da tabela
        const tabela = document.getElementById('tabelaDados').getElementsByTagName('tbody')[0];
        tabela.innerHTML = '';
        // Obter os usuários armazenados no LocalStorage ou um array vazio se não houver dados
        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        // Iterar sobre cada usuário para criar as linhas da tabela dinamicamente
        for (let usuario of usuarios) {
            let linha = tabela.insertRow();
            let celulaNome = linha.insertCell(0);
            let celulaEmail = linha.insertCell(1);
            let celulaSenha = linha.insertCell(2);
            let celulaAcoes = linha.insertCell(3);
            // Preencher as células com os dados do usuário
            celulaNome.innerHTML = usuario.nome;
            celulaEmail.innerHTML = usuario.email;
            celulaSenha.innerHTML = usuario.senha;
            // Adicionar um botão de excluir na célula de Ações com atributos de dados para ID e nome do usuário
            celulaAcoes.innerHTML = `<button class="excluirBtn" data-id="${usuario.id}" data-nome="${usuario.nome}">Excluir</button>`;
        }
        // Adicionar um ouvinte de evento para cada botão de excluir gerado dinamicamente
        let botoes = document.querySelectorAll('.excluirBtn');
        	for(let button of botoes){
            button.addEventListener('click', function() {
                let nomeUsuario = this.getAttribute('data-nome');
                let idUsuario = this.getAttribute('data-id');
                mostrarModal(nomeUsuario, idUsuario); // Chamar função para exibir o modal de confirmação
            });
        };
    }
    carregarTabela(); // Chamar a função para carregar a tabela quando o documento é carregado
    // Definição das variáveis para o modal de confirmação
    let modal = document.getElementById("modalExcluir");
    let span = document.getElementsByClassName("close")[0];
    let confirmarExcluir = document.getElementById("confirmarExcluir");
    let cancelarExcluir = document.getElementById("cancelarExcluir");
    let usuarioNomeElemento = document.getElementById("usuarioNome");
    let usuarioParaExcluirId = '';
    // Função para exibir o modal de confirmação
    function mostrarModal(nomeUsuario, idUsuario) {
        usuarioParaExcluirId = idUsuario;
        usuarioNomeElemento.textContent = nomeUsuario;
        modal.style.display = "block";
    }
    // Ouvinte de evento para fechar o modal quando clicar no 'x'
    span.onclick = function() {
        modal.style.display = "none";
    }
    // Ouvinte de evento para fechar o modal ao clicar no botão Cancelar
    cancelarExcluir.onclick = function() {
        modal.style.display = "none";
    }
    // Ouvinte de evento para confirmar a exclusão quando clicar no botão Excluir
    confirmarExcluir.onclick = function() {
   	 // Obter os usuários do LocalStorage ou um array vazio se não houver dados
    	let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    	// Filtrar o usuário a ser excluído pelo ID
    	usuarios = usuarios.filter(usuario => usuario.id != usuarioParaExcluirId);
    	// Atualizar o LocalStorage sem o usuário excluído
    	localStorage.setItem('usuarios', JSON.stringify(usuarios));
    	// Fechar o modal após a exclusão e recarregar a tabela
    	modal.style.display = "none";
    	carregarTabela(); // Recarregar a tabela após exclusão
    }
    // Ouvinte de evento para fechar o modal ao clicar fora dele
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});



