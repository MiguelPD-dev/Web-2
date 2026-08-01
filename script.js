// Vetor vazio para guardar os objetos dos alunos
var vetorAlunos = [];

// Função que é ativada quando clica no botão "Salvar Aluno"
function cadastrarAluno() {
    // 1. Pegar os valores que o usuário digitou nas caixinhas
    var inputNome = document.getElementById('nome').value;
    var inputMatricula = document.getElementById('matricula').value;
    var inputCurso = document.getElementById('curso').value;
    var inputPeriodo = document.getElementById('periodo').value;
    var inputMedia = document.getElementById('media').value;

    // 2. Criar o objeto do aluno com as informações (JSON)
    var aluno = {
        nome: inputNome,
        matricula: inputMatricula,
        curso: inputCurso,
        periodo: inputPeriodo,
        media: parseFloat(inputMedia) // Garante que a média seja número com vírgula
    };

    // 3. Colocar o objeto dentro do vetor
    vetorAlunos.push(aluno);

    // 4. Limpar as caixinhas para o próximo cadastro
    document.getElementById('nome').value = "";
    document.getElementById('matricula').value = "";
    document.getElementById('curso').value = "";
    document.getElementById('periodo').value = "";
    document.getElementById('media').value = "";

    // 5. Chamar as funções que atualizam a tela
    atualizarTabela();
    calcularEstatisticas();
}

// Função para mostrar os alunos na tabela
function atualizarTabela() {
    var corpoTabela = document.getElementById('corpo-tabela');
    
    // Apaga tudo que tinha antes na tabela para não duplicar
    corpoTabela.innerHTML = ""; 

    // Um "for" clássico para passar por todos os alunos do vetor
    for (var i = 0; i < vetorAlunos.length; i++) {
        var alunoAtual = vetorAlunos[i];

        // Montando o HTML da linha da tabela juntando as strings (+)
        var linha = "<tr>" +
                        "<td>" + alunoAtual.nome + "</td>" +
                        "<td>" + alunoAtual.matricula + "</td>" +
                        "<td>" + alunoAtual.curso + "</td>" +
                        "<td>" + alunoAtual.periodo + "</td>" +
                        "<td>" + alunoAtual.media + "</td>" +
                    "</tr>";
        
        // Adiciona a linha no corpo da tabela
        corpoTabela.innerHTML += linha;
    }
}

// Função para fazer as contas das estatísticas
function calcularEstatisticas() {
    var quantidade = vetorAlunos.length;
    
    // Atualiza o total na tela
    document.getElementById('qtd-alunos').innerHTML = quantidade;

    // Se não tiver ninguém, não faz a conta da média
    if (quantidade == 0) {
        document.getElementById('media-turma').innerHTML = "0.00";
        return;
    }

    // Somar todas as médias
    var somaDasMedias = 0;
    for (var i = 0; i < quantidade; i++) {
        somaDasMedias = somaDasMedias + vetorAlunos[i].media;
    }

    // Dividir a soma pela quantidade de alunos
    var mediaGeral = somaDasMedias / quantidade;

    // Atualiza a média na tela, fixando 2 casas decimais
    document.getElementById('media-turma').innerHTML = mediaGeral.toFixed(2);
}