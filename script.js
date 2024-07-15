// URL da API que retorna a cotação atual do Dólar para Real
const endpoint = "http://economia.awesomeapi.com.br/json/last/USD-BRL";

// Elemento HTML onde será exibida a cotação
const text = document.getElementById("text");

// Variável global para armazenar o formato da cotação
let formato;

// Chamada fetch para obter os dados da API
fetch(endpoint)
    .then(response => {
        // Verifica se a resposta da rede foi bem-sucedida
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        // Converte a resposta para JSON
        return response.json();
    })
    .then(dados => {
        // Extrai a cotação do Dólar para Real e converte para número
        const cotacaoDolarReal = parseFloat(dados.USDBRL.bid);
        // Formata o valor para ter duas casas decimais
        formato = cotacaoDolarReal.toFixed(2);
        // Exibe a cotação no console
        console.log(`A cotação de hoje do valor do Dólar para Real é: ${formato}`);
    })
    .catch(erro => {
        // Exibe uma mensagem de erro caso ocorra algum problema na requisição
        console.log(`Não consegui fazer a operação`, erro);
    });

// Função para atualizar o conteúdo do elemento HTML com a cotação formatada
function gerar() {
    text.innerHTML = formato;
}
