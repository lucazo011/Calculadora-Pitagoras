// Descobrir a medida de um dos catetos 

function calcularCorpo2() {
    const cateto = parseFloat(document.getElementById('cateto').value);
    const hipotenusa = parseFloat(document.getElementById('hipotenusa').value);
    const resultado = document.querySelector('.resultado-2');

    if (isNaN(cateto) || isNaN(hipotenusa)) {
        resultado.style.color = 'red'
        resultado.textContent = "Por favor, insira somente valores numéricos";
        return;
    }

    function calcularCateto() {
        let catetoX = Math.sqrt(hipotenusa * hipotenusa - cateto * cateto);

        if (isNaN(catetoX) || catetoX <= 0) {
            resultado.style.color = 'red'
            resultado.textContent = "Os valores informados não formam um triângulo válido";
        } else {
            resultado.style.color = 'green'
            resultado.textContent = "O valor do cateto é " + catetoX;
        }
    }

    calcularCateto();
}

const botao2 = document.getElementById('botao-2');
botao2.addEventListener('click', calcularCorpo2);
