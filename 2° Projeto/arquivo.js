const form = document.getElementById('form-list')
const imgAprovado = '<img src="images/aprovado.png" alt="Emoji celebrando"/>'
const imgReprovado = '<img src="images/reprovado.png" alt="Emoji decepcionado"/>'
const atividades = []
const notas = []
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinina = parseFloat(prompt("Digíte a nota mínina:"))

let linhas = ''

form.addEventListener('submit', enviar)

function enviar(e) {
    e.preventDefault()

    adicionarLinha()
    mostrarTabela()
    mediaFinal()
    mostraMediaFinal()
}

function adicionarLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')

    if(atividades.includes(inputNomeAtividade.value)) {
        alert(`Atividade: ${inputNomeAtividade.value} já inserida!`)
    } else {
        atividades.push(inputNomeAtividade.value)
        notas.push(parseFloat(inputNotaAtividade.value))

        let linha = '<tr>'
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >= notaMinina ? imgAprovado : imgReprovado}</td>`
        linha += `</tr>`

        linhas += linha
    }
    
    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
}

function mostrarTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function mediaFinal() {
    let somaDasNotas = 0

    for(let pos = 0; pos < notas.length; pos++) {
        somaDasNotas += notas[pos]
    }

    return somaDasNotas / notas.length
}

function mostraMediaFinal(){
    const media = mediaFinal()

    document.getElementById('media-final-valor').innerHTML = media.toFixed(2)
    document.getElementById('media-final-resultado').innerHTML = media >= notaMinina ? spanAprovado : spanReprovado
}