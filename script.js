const endpoint = "http://economia.awesomeapi.com.br/json/last/USD-BRL"

fetch(endpoint)
    .then(response => {
        if (!response.ok){
            throw new Error('Network response was not ok ' + response.statusText);
        }
    return response.json();
})

.then(dados => {
    const DopRe = parseFloat(dados.USDBRL.bid);
    const formato = DopRe.toFixed(2);
    console.log(` a cotaçao de hoje do valor do Dolar para Real e: ${formato}`) 
})
.catch(erro => {
    console.log(`Nao conseguir fazer a operaçao`, erro);
});