const endpoint = "http://economia.awesomeapi.com.br/json/last/USD-BRL";
const text = document.getElementById("text");
let formato; // Variável global para armazenar o formato da cotação

fetch(endpoint)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(dados => {
        const cotacaoDolarReal = parseFloat(dados.USDBRL.bid);
        formato = cotacaoDolarReal.toFixed(2);
        console.log(`A cotação de hoje do valor do Dólar para Real é: ${formato}`);
    })
    .catch(erro => {
        console.log(`Não consegui fazer a operação`, erro);
    });

// Função para atualizar o conteúdo do elemento <p id="text">
function gerar() {
    text.innerHTML = formato;
}
