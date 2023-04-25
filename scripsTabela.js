function addnome() { 
    let vendedor = document.getElementById("nome")
    let Nome = document.getElementById("Nome")
    let nome = String(vendedor.value)
    Nome.innerHTML = nome
}