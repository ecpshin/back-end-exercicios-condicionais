const preco = 1000.00;
let total = 0, n = 0, i = 1 / 100;
let mensagem = null, parcelado = 'sim';
n = 7;

if (parcelado.toLowerCase() === 'nao') {
    total = preco - (preco * (1 / 10));
    mensagem = `Pagamento à vista no valor de R$ ${total}`;
} else if (n > 1) {
    (n < 7) ? (total = preco / n,
        mensagem = `Compra no valor de ${preco.toFixed(2)} parcelado em ${n}x de R$ ${total.toFixed(2)}.`)
        : (n <= 12) ? (M = (preco * (1 + i) ** n), total = M / n, mensagem = `Compra no valor de ${M.toFixed(2)} parcelado em ${n}x de R$ ${total.toFixed(2)}.`) :
            mensagem = "Forma de pagamento e/ou quantidade de parcelas inválidos!";
} else {
    mensagem = "Forma de pagamento e/ou quantidade de parcelas inválidos!";
}

console.log(mensagem);



