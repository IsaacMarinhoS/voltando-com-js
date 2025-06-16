function verFilme() {
    // Esconde todos os filmes
    let todos = document.querySelectorAll('.filme')
    todos.forEach(f => f.style.display = 'none')

    // Verifica qual categoria foi marcada e mostra só ela
    if (document.getElementById("radioComedia").checked) {
        document.querySelectorAll('.comedia').forEach(f => f.style.display = 'block')
    } else if (document.getElementById("radioAcao").checked) {
        document.querySelectorAll('.acao').forEach(f => f.style.display = 'block')
    } else if (document.getElementById("radioGuerra").checked) {
        document.querySelectorAll('.guerra').forEach(f => f.style.display = 'block')
    } else if (document.getElementById("radioDrama").checked) {
        document.querySelectorAll('.drama').forEach(f => f.style.display = 'block')
    }
}
