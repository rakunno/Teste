const formulario = document.querySelector('#form')

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    let pesoImput = document.querySelector('#peso')
    let alturaImput = document.querySelector('#altura')
    let impImput = document.querySelector('#imp')

    let peso = Number(pesoImput.value)
    let altura = Number(alturaImput.value)
    let imp = Number(impImput.value)

    

    


    const imc = getImc(peso, altura, imp)
    const percent = imc / altura * 100
    const msg = `Seu Lucro é RS: ${imc} <br /> ${percent.toFixed(2)} Porcento`

    setResultado(msg, true)
})

// function getImc(peso, altura){
//     if(altura < 69.99) {
//         let imposto = altura / 100 * 4
//     let taxa = altura / 100 * 12
//     const imc = altura - imposto - taxa - 5 - peso
//     return imc.toFixed(2)
//     } else {
//         let imposto = altura / 100 * 4
//     let taxa = altura / 100 * 12
//     const imc = altura - imposto - taxa - 18.95 - peso
//     return imc.toFixed(2)
//     }
// }

function getImc(peso, altura, imp){
    if(altura < 69.99) {
        let imposto = altura / 100 * imp
    let taxa = altura / 100 * 12
    const imc = altura - imposto - taxa - 5.5 - peso
    return imc.toFixed(2)
    } else {
        let imposto = altura / 100 * imp
    let taxa = altura / 100 * 12
    const imc = altura - imposto - taxa - 20.60 - peso
    return imc.toFixed(2)
    }
}


function criaP(){
    let p = document.createElement('p')
    return p
}


function setResultado(msg, isValid){
    let resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''
    let p = criaP()

    if(isValid) {
        p.classList.add('paragrafo-resultado')
    }else{
        p.classList.add('paragrafo-resultado-f')
    }

    p.innerHTML = msg
    resultado.appendChild(p)
}



