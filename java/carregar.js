<<<<<<< HEAD
const pessoas = JSON.parse(localStorage.getItem("pessoas"))

pessoas.forEach( pessoa => card(pessoa  ))

function card(pessoa) {

    //template literals
    const content = `
        <div class="nes-container with-title is-centered">
            <p class="title">${pessoa.nome}</p>
            <p>${pessoa.peso}</p>


            <a href="#" class="nes-badge is-splited">
            <span class="is-dark">Peso:</span>
            <span class="is-error">${pessoa.peso}</span>
            </a>

            <a href="#" class="nes-badge is-splited">
            <span class="is-dark">Cm:</span>
            <span class="is-error">${pessoa.altura}</span>
            </a>

           
        </div>
        
    `

    const card = document.createElement("div")
    card.innerHTML = content

    document
        .querySelector("#lista-de-pessoas")
        .appendChild(card)
=======
const tarefas = JSON.parse(localStorage.getItem("tarefas"))

tarefas.forEach( tarefa => card(tarefa))

function card(tarefa) {
    //template literals
    const content = `
        <div class="nes-container with-title is-centered">
            <p class="title">${tarefa.titulo}</p>
            <p>${tarefa.descricao}</p>

            <a href="#" class="nes-badge is-icon">
            <span class="is-success"><i class="nes-icon coin is-small"></i></span>
            <span class="is-primary">${tarefa.pontos}</span>
            </a>

            <progress class="nes-progress is-success" value="10" max="100"></progress>

            <button type="button" class="nes-btn is-primary">-</button>
            <button type="button" class="nes-btn is-error">apagar</button>
            <button type="button" class="nes-btn is-primary">+</button>
        </div>
    `

    const card = document.createElement("div")
    card.innerHTML = content

    document
        .querySelector("#lista-de-tarefas")
        .appendChild(card)
>>>>>>> 563b3a7a43c37a4486ce8aa7e22ced030da631d2
}