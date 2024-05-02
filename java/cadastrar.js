<<<<<<< HEAD
document
    .querySelector("#botao-cadastrar")
    .addEventListener("click", (e) => {
        e.preventDefault()

        const form = document.querySelector("form")

        const pessoa = {
            nome: form.nome.value,
            peso: form.peso.value,
            altura: form.altura.value
        }
        salvar(pessoa)
    })

    function salvar(pessoa) {
        const pessoas = JSON.parse (localStorage.getItem('pessoas')) || []
        pessoas.push(pessoa)
        localStorage.setItem("pessoas", JSON.stringify(pessoas))

        window.location = "cadastros.html"

=======
document
    .querySelector("#botao-cadastrar")
    .addEventListener("click", (e) => {
        e.preventDefault()

        const form = document.querySelector("form")

        const tarefa = {
            titulo: form.titulo.value,
            descricao: form.descricao.value,
            pontos: form.pontos.value
        }
        salvar(tarefa)
    })

    function salvar(tarefa) {
        const tarefas = JSON.parse (localStorage.getItem('tarefas')) || []
        tarefas.push(tarefa)
        localStorage.setItem("tarefas", JSON.stringify(tarefas))

        window.location = "index.html"

>>>>>>> 563b3a7a43c37a4486ce8aa7e22ced030da631d2
    }