var vetorAlunos = [];

function cadastrarAluno() {
    var inputNome = document.getElementById("nome");
    var inputMatricula = document.getElementById("matricula");
    var inputCurso = document.getElementById("curso");
    var inputPeriodo = document.getElementById("periodo");
    var inputMedia = document.getElementById("media");
    var msgAlerta = document.getElementById("msg-alerta");

    if (inputNome.value == "" || inputMedia.value == "") {
        msgAlerta.style.color = "red";
        msgAlerta.innerHTML = "Por favor, preencha o Nome e a Média!";
        return;
    }

    var aluno = {
        nome: inputNome.value,
        matricula: inputMatricula.value,
        curso: inputCurso.value,
        periodo: inputPeriodo.value,
        media: parseFloat(inputMedia.value)
    };

    vetorAlunos.push(aluno);

    msgAlerta.classList.add("sucesso");
    msgAlerta.innerHTML = "Aluno cadastrado com sucesso!";

    inputNome.value = "";
    inputMatricula.value = "";
    inputCurso.value = "";
    inputPeriodo.value = "";
    inputMedia.value = "";

    atualizarTabela();
    calcularEstatisticas();
}

function atualizarTabela() {
    var corpoTabela = document.getElementById("corpo-tabela");
    corpoTabela.innerHTML = "";

    for (var i = 0; i < vetorAlunos.length; i++) {
        var aluno = vetorAlunos[i];

        var corMedia = "red";
        if (aluno.media >= 6) {
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

    if (mediaGeral >= 6) {
        caixaEstatistica.style.backgroundColor = "#e8f5e9";
        caixaEstatistica.style.borderColor = "green";
    } else {
        caixaEstatistica.style.backgroundColor = "#ffebee";
        caixaEstatistica.style.borderColor = "red";
    }
}

function alternarTabela() {
    var caixaTabela = document.getElementById("caixa-tabela");

    if (caixaTabela.style.display == "none") {
        caixaTabela.style.display = "block";
    } else {
        caixaTabela.style.display = "none";
    }
}

function destacarPainel() {
    var caixaCadastro = document.getElementById("caixa-cadastro");
    caixaCadastro.classList.toggle("destaque");
}