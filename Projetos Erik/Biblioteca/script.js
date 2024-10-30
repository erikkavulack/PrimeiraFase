let biblioteca = [];
let inputTitulo = document.getElementById("cadTitulo");
let inputAutor = document.getElementById("cadAutor");
let inputGenero = document.getElementById("cadGen");
let inputEditora = document.getElementById("cadEditora");
let inputIsbn = document.getElementById("cadIsbn");
let acervo = document.getElementById("acervo");

function add(){
    let livro = {
        titulo:inputTitulo.value,
        autor:inputAutor.value,
        genero:inputGenero.value,
        editora:inputEditora.value,
        isbn:inputIsbn.value
    }
    biblioteca.push(livro);
    inputTitulo.value = null;
    inputAutor.value = null;
    inputGenero.value = null;
    inputEditora.value = null;
    inputIsbn.value = null;
    listagem(); 
}

function listagem(){
    let livros = "";
    for(let livro of biblioteca){
        livros += "Título: " + livro.titulo + "<br>";
        livros += "Autor: " + livro.autor + "<br>";
        livros += "Gênero: " + livro.genero + "<br>";
        livros += "Editora: " + livro.editora + "<br>";
        livros += "ISBN: " + livro.isbn + "<br>";
        livros += "-------------------------<br>"
    }
    acervo.innerHTML = livros;
}