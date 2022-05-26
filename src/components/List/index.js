import Card from "../Card";

function List({listTransactions,removeTransaction}){

    return(
        listTransactions.map((transaction, index) => <Card transaction={transaction} key={index} />)
    )
}

export default List;