const preco = 1000.00;
let totalAPagar = 0, quantParcelas = 0;
let mensagem = null, formaPagamento = 'Parcelado';
quantParcelas = 6;

if (formaPagamento.toLowerCase() === 'A Vista'.toLowerCase()) {
    totalAPagar = preco * 0.90;
    mensagem = `Pagamento à vista no valor de R$ ${totalAPagar}`;
} else {
    //totalAPagar = (quantParcelas > 1) ? (preco / quantParcelas) : 0;
    (quantParcelas > 1 && quantParcelas <= 6) ? (totalAPagar = preco / quantParcelas,
        mensagem = `Compra no valor de ${preco} parcelado em ${quantParcelas} parcelas no valor de R$ ${totalAPagar.toFixed(2)}.`)
        : mensagem = "Forma de pagamento e/ou quantidade de parcelas inválidos!";
}

console.log(mensagem);



