document.addEventListener('keypress', function(e){

    if(e.key === 'Enter') {

    const btn = document.getElementById('enviar')

    btn.click()

    let vendedor = document.getElementById("nome")
    let Nome = document.getElementById("Nome")
    let nome = String(vendedor.value)
    Nome.innerHTML = nome
    }
})
function Cliquei(){
    const giro = document.getElementById('giros1')
    const giro1 = document.getElementById('num1')
    const g1 = Number(giro.value)
    giro1.innerText = g1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}