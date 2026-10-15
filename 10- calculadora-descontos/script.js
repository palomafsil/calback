// EXEMPLO 10 - Callback que devolve um valor com return.

function descontoDez(valor) {
    return valor * 0.9; // Retorna o preço com 10% de desconto.
}

function descontoVinte(valor) {
    return valor * 0.8; // Retorna o preço com 20% de desconto.
}

// Recebe o preço original e a função que aplicará o desconto.
function calcularPreco(preco, callback) {
    const resultado = callback(preco); // Guarda o valor retornado pelo callback.
    console.log('Preço final: R$', resultado.toFixed(2));
}

calcularPreco(100, descontoDez); // SAÍDA: Preço final: R$ 90.00
calcularPreco(100, descontoVinte); // SAÍDA: Preço final: R$ 80.00
