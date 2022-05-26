const TotalMoney = ({ listTransactions }) => {
    const valorTotal = listTransactions.reduce((valorAnterior, valorAtual) => {
        return valorAtual.value + valorAnterior;
    }, 0);


    return (
        <div className="totalValue">
            <div className="textTotalValue">
            <h5>Valor Total:</h5>
            <p>O valor se refere ao saldo</p>
            </div>
            <span>
                {valorTotal.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                })}
            </span>
        </div>
    );
};

export default TotalMoney;