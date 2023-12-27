function calcular() {
    const adjacente = parseFloat(document.getElementById('adjacente').value);
    const oposto = parseFloat(document.getElementById('oposto').value);
    const resultado = document.querySelector('.resultado');

    if (isNaN(adjacente) || isNaN(oposto)) {
        resultado.style.color = 'red'
        resultado.textContent = 'Por favor, preencha todos os campos com valores numéricos.';
        return;
    }

    function calcularHipotenusa() {
        const a = adjacente * adjacente + oposto * oposto;
        if (a > 0) {
            const hipotenusa = Math.sqrt(a);
            resultado.style.color = 'green'
            resultado.textContent = 'O valor da hipotenusa é: ' + hipotenusa.toFixed(2);
        } else {
            resultado.style.color = 'red'
            resultado.textContent = 'Os valores inseridos não formam um triângulo válido.';
        }
    }

    calcularHipotenusa();
}

const botao = document.querySelector('.botao');
botao.addEventListener('click', calcular);
