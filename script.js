const display = document.getElementById('display');
const botao = document.querySelectorAll('button');

let caixaInput = '';
let operador = '';
let anteriorInput = '';

botao.forEach(botao => {
    botao.addEventListener('click', () => {
        const valor = botao.textContent;
        if (valor === 'C') {
            //limpa o display
            caixaInput = '';
            anteriorInput = '';
            operador = '';
            display.value = '';
        } else if (valor === '=') {
            //calcula o resultado
            if (anteriorInput && caixaInput && operador) {
                caixaInput = eval(`${anteriorInput} ${operador} ${caixaInput}`);
                display.value = caixaInput;
                operador = '';
                anteriorInput = '';
            }
        } else if (['+', '-', '*', '/'].includes(valor)) {
            //define operador
            if (caixaInput) {
                operador = valor;
                anteriorInput = caixaInput;
                caixaInput = '';
            }
        } else {
            //adiciona o numero ou ponto ao input atual
            caixaInput += valor;
            display.value = caixaInput;
        }
    })
})