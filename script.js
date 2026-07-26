// 1. Vetor de Objetos para armazenamento na memória local (JSON)
const listaAlunos = [];

// 2. Mapeamento de Elementos do DOM
const formAluno = document.getElementById('form-aluno');
const corpoTabela = document.getElementById('corpo-tabela');
const elTotalAlunos = document.getElementById('total-alunos');
const elMediaGeral = document.getElementById('media-geral');

// 3. Ovinte de Evento para o Formulário de Cadastro
formAluno.addEventListener('submit', function (event) {
    // Evita o recarregamento padrão da página ao enviar o formulário
    event.preventDefault();

    // Captura e formatação dos valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const matricula = document.getElementById('matricula').value.trim();
    const curso = document.getElementById('curso').value.trim();
    const periodo = parseInt(document.getElementById('periodo').value);
    const media = parseFloat(document.getElementById('media').value);

    // Criação do objeto individual do aluno
    const novoAluno = {
        nome: nome,
        matricula: matricula,
        curso: curso,
        periodo: periodo,
        media: media
    };

    // Armazena o objeto no vetor de alunos
    listaAlunos.push(novoAluno);

    // Atualiza a interface gráfica (Tabela e Estatísticas)
    atualizarTabela();
    atualizarEstatisticas();

    // Limpa os campos do formulário para o próximo cadastro
    formAluno.reset();
    document.getElementById('nome').focus();
});

// 4. Função para Manipulação do DOM: Atualizar Tabela de Alunos
function atualizarTabela() {
    // Limpa o conteúdo atual do tbody para evitar duplicatas
    corpoTabela.innerHTML = '';

    // Percorre o vetor de objetos e gera uma nova linha na tabela para cada aluno
    listaAlunos.forEach(aluno => {
        const linha = document.createElement('tr');

        linha.innerHTML = `
            <td>${aluno.nome}</td>
            <td>${aluno.matricula}</td>
            <td>${aluno.curso}</td>
            <td>${aluno.periodo}º</td>
            <td><strong>${aluno.media.toFixed(1)}</strong></td>
        `;

        corpoTabela.appendChild(linha);
    });
}

// 5. Função para Calcular e Exibir Estatísticas Automaticamente
function atualizarEstatisticas() {
    const totalAlunos = listaAlunos.length;

    // Atualiza a quantidade total de alunos
    elTotalAlunos.textContent = totalAlunos;

    if (totalAlunos === 0) {
        elMediaGeral.textContent = '0.00';
        return;
    }

    // Calcula a soma de todas as médias usando o método reduce
    const somaMedias = listaAlunos.reduce((acumulador, aluno) => acumulador + aluno.media, 0);
    
    // Calcula a média geral da turma
    const mediaGeral = somaMedias / totalAlunos;

    // Exibe a média formatada com duas casas decimais
    elMediaGeral.textContent = mediaGeral.toFixed(2);}