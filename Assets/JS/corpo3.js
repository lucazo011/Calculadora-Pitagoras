// Comprovar se o triangulo é retangulo

function calcularCorpo3 () {
    const hipotenusa = parseFloat(document.getElementById('hipotenusa-1').value)
    const adjacente = parseFloat(document.getElementById('cateto-adjacente').value)
    const oposto = parseFloat(document.getElementById('cateto-oposto').value)
    const resultado = document.querySelector('.resultado-3')

    if(isNaN(hipotenusa) || isNaN(adjacente) || isNaN(oposto)) {
        resultado.style.color = 'red'
        resultado.textContent = "Por favor, insira somente valores numéricos";
        return;
    }

    function comprovar () {
        let ValorHipotenusa = hipotenusa * hipotenusa;
        let SomaDosCatetos = adjacente * adjacente + oposto * oposto;

        if(ValorHipotenusa && SomaDosCatetos <= 0) {
            resultado.style.color = 'red'
            resultado.textContent = "Os valores informados não formam um triângulo válido";
        } else if (SomaDosCatetos === ValorHipotenusa) {
            resultado.style.color = 'green'
            resultado.textContent = `O triângulo é retâgulo (valor: ${ValorHipotenusa})`
        } else {
            resultado.style.color = 'orange'
            resultado.textContent = "O triângulo não é retângulo"
        }
    }

    comprovar();
}   

const botao3 = document.getElementById('botao-3').addEventListener('click', calcularCorpo3);