document.addEventListener('DOMContentLoaded', (event) => {
    // Esta função é executada quando o documento HTML é completamente carregado
    function carregarTabela() {
        // Função para carregar e exibir os dados da tabela
        const tabela = document.getElementById('tabelaDados').getElementsByTagName('tbody')[0];
        tabela.innerHTML = '';
        // Obter os usuários armazenados no LocalStorage ou um array vazio se não houver dados
        let veiculos = JSON.parse(localStorage.getItem('garagem')) || [];
        // Iterar sobre cada usuário para criar as linhas da tabela dinamicamente
        for (let veiculo of veiculos) {
            let linha = tabela.insertRow();
            let celulaId= linha.insertCell(0);
            let celulaPlaca= linha.insertCell(1);
            let celulaMarca = linha.insertCell(2);
            let celulaModelo = linha.insertCell(3);
            let celulaAno = linha.insertCell(4);
            let celulaAcoes = linha.insertCell(5);
            // Preencher as células com os dados do usuário
            celulaId.innerHTML = veiculo.id;
            celulaPlaca.innerHTML = veiculo.placa;
            celulaMarca.innerHTML = veiculo.marca;
            celulaModelo.innerHTML = veiculo.modelo;
            celulaAno.innerHTML = veiculo.ano;
            // Adicionar um botão de excluir na célula de Ações com atributos de dados para ID e nome do usuário
            celulaAcoes.innerHTML = `<button class="acoesBtn" data-id="${veiculo.id}" data-placa="${veiculo.placa}">Config</button>`;
        }
        // Adicionar um ouvinte de evento para cada botão de excluir gerado dinamicamente
        let botoes = document.querySelectorAll('.acoesBtn');
        	for(let button of botoes){
            button.addEventListener('click', function() {
                let placa = this.getAttribute('data-placa');
                let id = this.getAttribute('data-id');
                mostrarModal(placa, id); // Chamar função para exibir o modal de confirmação
            });
        }
    }
    carregarTabela(); // Chamar a função para carregar a tabela quando o documento é carregado
    // Definição das variáveis para o modal de confirmação
    let modal = document.getElementById("modalAcoes");
    let span = document.getElementsByClassName("close")[0];
    let btnExcluir = document.getElementById("btnExcluir");
    let btnEditar = document.getElementById("btnEditar");
    let veiculoPlaca = document.getElementById("veiculoPlaca");
    let veiculoSelecionado = '';
    // Função para exibir o modal de confirmação
    function mostrarModal(placa, id) {
        veiculoSelecionado = id;
        veiculoPlaca.textContent = placa;
        modal.style.display = "block";
    }
    // Ouvinte de evento para fechar o modal quando clicar no 'x'
    span.onclick = function() {
        modal.style.display = "none";
    }
    // Ouvinte de evento para fechar o modal ao clicar no botão Cancelar
    btnEditar.onclick = function() {
        modal.style.display = "none";
    }
    // Ouvinte de evento para confirmar a exclusão quando clicar no botão Excluir
    btnExcluir.onclick = function() {
   	 // Obter os usuários do LocalStorage ou um array vazio se não houver dados
    	let veiculos = JSON.parse(localStorage.getItem('garagem')) || [];
    	// Filtrar o usuário a ser excluído pelo ID
    	veiculos = veiculos.filter(veiculo => veiculo.id != veiculoSelecionado);
    	// Atualizar o LocalStorage sem o usuário excluído
    	localStorage.setItem('garagem', JSON.stringify(veiculos));
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
