// Array que armazena os nomes dos amigos
let amigos = [];
// Array que armazena os amigos sorteados
let amigosSorteados = [];

// Função para adicionar um amigo ao array
function adicionarAmigo() {
    // Captura o valor do campo de entrada
    let nome = document.getElementById("amigo").value.trim();

    // Valida se o campo não está vazio
    if (nome === "") {
        // Exibe um alerta se o campo estiver vazio
        alert("Este campo está vazio. Por favor, insira um nome válido.");
    } else if (amigos.includes(nome)) {
        // Verifica se o nome já está na lista de amigos
        alert("Este nome já foi adicionado. Tente outro nome.");
    } else {
        // Adiciona o nome ao array de amigos
        amigos.push(nome);
        
        // Exibe uma mensagem de sucesso (opcional)
        console.log("Amigo adicionado: " + nome);
        
        // Limpa o campo de entrada
        document.getElementById("amigo").value = "";
        
        // Exibe o array atualizado (opcional)
        console.log(amigos);

        // Atualiza a lista de amigos na interface
        atualizarLista();
    }
}

// Função para atualizar a lista de amigos na interface
function atualizarLista() {
    // Obtém o elemento da lista HTML onde os amigos serão exibidos
    let lista = document.getElementById("listaAmigos");

    // Limpa a lista existente
    lista.innerHTML = "";

    // Percorre o array de amigos e adiciona um <li> para cada nome
    for (let i = 0; i < amigos.length; i++) {
        // Cria o elemento <li>
        let li = document.createElement("li");

        // Cria o texto para o nome do amigo
        let nomeAmigo = document.createElement("span");
        nomeAmigo.textContent = amigos[i];

        // Cria o botão de exclusão (X)
        let excluir = document.createElement("button");
        excluir.textContent = "X";
        excluir.classList.add("excluir");

        // Adiciona o evento de clique no botão de excluir
        excluir.addEventListener("click", function() {
            excluirAmigo(i);
        });

        // Adiciona o nome do amigo e o botão de exclusão ao <li>
        li.appendChild(nomeAmigo);
        li.appendChild(excluir);

        // Adiciona o <li> à lista
        lista.appendChild(li);
    }
}

// Função para excluir um amigo da lista
function excluirAmigo(index) {
    // Remove o amigo do array usando o índice
    let amigoRemovido = amigos.splice(index, 1);

    // Exibe uma mensagem de sucesso (opcional)
    console.log("Amigo removido: " + amigoRemovido);

    // Atualiza a lista de amigos na interface
    atualizarLista();
}

// Função para realizar o sorteio dos amigos
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não há amigos na lista para sortear.");
        return;
    }

    if (amigosSorteados.length === amigos.length) {
        alert("Todos os amigos já foram sorteados. Reinicie o jogo para realizar novos sorteios.");
        return;
    }

    // Gera um índice aleatório entre 0 e o tamanho do array de amigos
    let indiceAleatorio;
    do {
        indiceAleatorio = Math.floor(Math.random() * amigos.length);
    } while (amigosSorteados.includes(indiceAleatorio));

    // Obtém o nome sorteado com o índice aleatório
    let amigoSorteado = amigos[indiceAleatorio];

    // Exibe o nome sorteado no elemento de resultado
    document.getElementById("resultado").innerHTML = "O amigo sorteado é: " + amigoSorteado;

    // Registra o amigo sorteado para garantir que não se repita
    amigosSorteados.push(indiceAleatorio);

    // Chama a função para registrar o sorteio no log
    registrarSorteio(amigoSorteado);
}

// Função para registrar o sorteio no log
function registrarSorteio(amigo) {
    console.log("Amigo sorteado: " + amigo);
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    // Limpa os arrays
    amigos = [];
    amigosSorteados = [];

    // Atualiza a lista na interface
    atualizarLista();

    // Limpa o resultado do sorteio
    document.getElementById("resultado").innerHTML = "";

    console.log("Jogo reiniciado.");
}
