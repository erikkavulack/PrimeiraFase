document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Documento carregado e pronto.');
    const form = document.getElementById('cadastroForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
// Gerar um ID único para o novo usuário
// Se houver usuários cadastrados, define o ID como o próximo na sequência. Caso contrário, define o ID como 1.
let id = usuarios.length ? usuarios[usuarios.length - 1].id + 1 : 1;
// Verifica se o ID já está em uso. Se estiver, incrementa o ID até encontrar um valor único.
while (usuarios.some(usuario => usuario.id === id)) {
    		id++;
}
        const usuario = { id, nome, email, senha };
        usuarios.push(usuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        modal.style.display = "block";
        form.reset();
    });
});
// Obtém o modal
let modal = document.getElementById("myModal");

// Obtém o elemento <span> que fecha o modal
let span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no <span> (x), fecha o modal
span.onclick = function() {
    modal.style.display = "none";
}
// Quando o usuário clicar em qualquer lugar fora do modal, fecha o modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


