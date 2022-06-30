/*
 * Exercício 01
 * Exercício - Cálculo do IMC
 * Data: 28/06/2022
 * @Author: Fernando Santos Pereira
*/
//Função para tratar o evento submit o formulário
window.onsubmit = function() {
    event.preventDefault();
    console.info('Evento submit acionado!');
};

//Capturando os valores digitado nos campos do formulário e armazenando em variáveis constante
const btnIniciar = window.document.getElementById('btnClick');
const peso = window.document.getElementsByName('peso');
const altura = window.document.getElementsByName('altura');
const div = window.document.getElementById('resultado');

//Função para mostrar o resultado do exercício
function resultado(result,corFundo) {
    div.classList.remove('oculta'); //Removendo a class css 
    div.style.background = corFundo; //Mudando a cor de background da div
    div.style.fontWeight = '600';
    div.innerHTML = `<p>${result}</p>`; 
}

//Função para determina o resultado o IMC
const resultImc = (indiceDeMassa) => { //Arrow Function
    indiceDeMassa = Number(indiceDeMassa);

    //Estrutura condicional
    if(indiceDeMassa < 18.5) {
        return `Seu IMC é ${indiceDeMassa} (Abaixo do peso)`;
    } else if(indiceDeMassa > 18.5 && indiceDeMassa < 24.9) {
        return `Seu IMC é ${indiceDeMassa} (Peso normal)`;
    } else if(indiceDeMassa > 25 && indiceDeMassa < 29.9) {
        return `Seu IMC é ${indiceDeMassa} (Sobrepeso)`;
    } else if(indiceDeMassa > 30 && indiceDeMassa < 34.9) {
        return `Seu IMC é ${indiceDeMassa} (Obesidade grau 1)`;
    } else if(indiceDeMassa > 35 && indiceDeMassa < 39.9) {
        return `Seu IMC é ${indiceDeMassa} (Obesidade grau 2)`;
    } else {
        return `Seu IMC é ${indiceDeMassa} (Obesidade grau 3)`;
    }
};

//Função para calcular o imc
 const calculadorImc = function() { //Função Anônima

    //Capturado os valores digitado pelo usuário e armazenado nas variáveis constante
    const userPeso = Number(peso[0].value);
    const userAltura = Number(altura[0].value);

    //Calculando o IMC do usuário
    let calculo = userPeso / (userAltura * userAltura);
    const imc = calculo.toFixed(1);

    //Chamando a função
    const indice = resultImc(imc);
    resultado(indice, '#0f9');
};

//Validando o campo 
const validacao = () => {

    //Estrutura condicional para a validação dos campos vazios
    if(peso[0].value === '' && altura[0].value === '') {
        resultado('Você não digitou nada no campo de peso e altura', 'red');
        window.document.body.style.backgroundColor = 'red';
        console.error('Você não digitou nada no campo de peso e altura');
    }else if(peso[0].value === '') {
        window.document.body.style.backgroundColor = 'red';
        resultado('Você não digitou nada no campo de informação do peso', 'red');
        console.error('Você não digitou nada no campo de informação do peso');
    } else if(altura[0].value === '') {
        window.document.body.style.backgroundColor = 'red';
        resultado('Você não digitou nada no campo de informação de altura', 'red');
        console.error('Você não digitou nada no campo de informação de altura');
    }

    //Estrutura condicional para os campos strings
    if(isNaN(peso[0].value) && isNaN(altura[0].value)) {
        window.document.body.style.backgroundColor = 'red';
        resultado('Você digitou um dado que não é um número no campo peso e altura', 'red');
        console.error('Você digitou um dado que não é um número no campo peso e altura');
        div.style.height = '65px';
    } else if(isNaN(peso[0].value)) {
        window.document.body.style.backgroundColor = 'red';
        resultado('Você digitou um dado que não é um número no campo peso', 'red');
        console.error('Você digitou um dado que não é um número no campo peso');
        div.style.height = '65px';
    } else if(isNaN(altura[0].value)) {
        window.document.body.style.backgroundColor = 'red';
        resultado('Você digitou um dado que não é um número no campo altura', 'red');
        console.error('Você digitou um dado que não é um número no campo altura');
        div.style.height = '65px';
    } else if(peso[0].value !== '' && altura[0].value !== '' && altura[0].value !== isNaN(altura[0].value) && peso[0].value !== isNaN(peso[0].value)) {
        window.document.body.style.backgroundColor = '#0f9';
        window.alert('Realizando o cálculo do IMC - Índice de Massa Corporal');
        console.log('Realizando o cálculo do IMC - Índice de Massa Corporal');
        calculadorImc(); //Chamando a função
    }

};

//Escuntando um evento 
btnIniciar.addEventListener('click',validacao);