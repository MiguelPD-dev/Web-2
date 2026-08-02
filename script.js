// Vetor de objetos para armazenar os alunos cadastrados
var vetorAlunos = [];

// =========================================================================
// 1. CADASTRAR ALUNO E MANIPULAR ESTILOS (Slides 4, 5, 12 e 13)
// =========================================================================
function cadastrarAluno() {
    // Acessando os elementos HTML pelo ID (Slide 4)
    var inputNome = document.getElementById("nome");
    var inputMatricula = document.getElementById("matricula");
    var inputCurso = document.getElementById("curso");
    var inputPeriodo = document.getElementById("periodo");
    var inputMedia = document.getElementById("media");
    var msgAlerta = document.getElementById("msg-alerta");

    // Validação simples: verificar se os campos foram preenchidos
    if (inputNome.value == "" || inputMedia.value == "") {
        // Alterando estilo diretamente via JS (Slide 5)
        msgAlerta.style.color = "red";
        msgAlerta.innerHTML = "Por favor, preencha o Nome e a Média!";
        return;
    }

    // Criando o objeto aluno
    var aluno = {
        nome: inputNome.value,
        matricula: inputMatricula.value,
        curso: inputCurso.value,
        periodo: inputPeriodo.value,
        media: parseFloat(inputMedia.value)
    };

    // Adicionando o objeto no vetor
    vetorAlunos.push(aluno);

    // Destaque visual temporário usando classList (Slide 12 e 13)
    msgAlerta.classList.add("sucesso");
    msgAlerta.innerHTML = "Aluno cadastrado com sucesso!";

    // Limpando os campos do formulário
    inputNome.value = "";
    inputMatricula.value = "";
    inputCurso.value = "";
    inputPeriodo.value = "";
    inputMedia.value = "";

    // Atualiza a tabela e as estatísticas
    atualizarTabela();
    calcularEstatisticas();
}

// =========================================================================
// 2. MONTRAR TABELA E APLICAR ESTILOS DINÂMICOS (Slides 5, 7 e 10)
// =========================================================================
function atualizarTabela() {
    var corpoTabela = document.getElementById("corpo-tabela");
    corpoTabela.innerHTML = ""; // Limpa a tabela antes de reescrever

    for (var i = 0; i < vetorAlunos.length; i++) {
        var aluno = vetorAlunos[i];

        // Se a média for maior ou igual a 7, destaca a cor do texto da média (Slide 5 e 7)
        var corMedia = "red";
        if (aluno.media >= 7) {
            corMedia = "green";
        }

        var linha = "<tr>" +
                        "<td>" + aluno.nome + "</td>" +
                        "<td>" + aluno.matricula + "</td>" +
                        "<td>" + aluno.curso + "</td>" +
                        "<td>" + aluno.periodo + "º</td>" +
                        "<td style='color: " + corMedia + "; font-weight: bold;'>" + aluno.media.toFixed(1) + "</td>" +
                    "</tr>";

        corpoTabela.innerHTML += linha;
    }
}

// =========================================================================
// 3. CALCULAR ESTATÍSTICAS E MUDAR MÚLTIPLOS ESTILOS (Slide 10)
// =========================================================================
function calcularEstatisticas() {
    var totalAlunos = vetorAlunos.length;
    var elQtd = document.getElementById("qtd-alunos");
    var elMediaGeral = document.getElementById("media-turma");
    var caixaEstatistica = document.getElementById("caixa-estatisticas");

    elQtd.innerHTML = totalAlunos;

    if (totalAlunos == 0) {
        elMediaGeral.innerHTML = "0.00";
        return;
    }

    var soma = 0;
    for (var i = 0; i < totalAlunos; i++) {
        soma = soma + vetorAlunos[i].media;
    }

    var mediaGeral = soma / totalAlunos;
    elMediaGeral.innerHTML = mediaGeral.toFixed(2);

    // Alterando múltiplos estilos do painel conforme a média geral (Slide 10)
    if (mediaGeral >= 7) {
        caixaEstatistica.style.backgroundColor = "#e8f5e9"; // Verde claro
        caixaEstatistica.style.borderColor = "green";
    } else {
        caixaEstatistica.style.backgroundColor = "#ffebee"; // Vermelho claro
        caixaEstatistica.style.borderColor = "red";
    }
}

// =========================================================================
// 4. MOSTRAR E ESCONDER ELEMENTOS (Slides 8, 9 e 14)
// =========================================================================
// Função para esconder ou mostrar a tabela usando display (Slides 8 e 9)
function alternarTabela() {
    var caixaTabela = document.getElementById("caixa-tabela");

    if (caixaTabela.style.display == "none") {
        caixaTabela.style.display = "block"; // Mostra o elemento
    } else {
        caixaTabela.style.display = "none";  // Esconde o elemento
    }
}

// Alternativa usando classList.toggle (Slide 14)
function destacarPainel() {
    var caixaCadastro = document.getElementById("caixa-cadastro");
    caixaCadastro.classList.toggle("destaque");
}