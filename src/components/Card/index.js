import trash from './../../img/trash.svg'

const Card = ({ transaction,removeTransaction }) => {
    return (
      <li >
        <div className={transaction.type}></div>
        <div className='divTransaction'>
          <h3>{transaction.description}</h3>
          <span>{transaction.type}</span>
        </div>
        <div className='divTransactionValue'>
          <p>R$: {transaction.value}</p>
          </div>
        <button><img src={trash} alt={trash}></img></button>
      </li>
    );
  };

  export default Card;