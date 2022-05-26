import { useState } from 'react';
import Form from './components/Form'
import List from './components/List';
import './App.css';
import nukenzie from './img/nukenzie.svg'
import TotalMoney from './components/TotalMoney';


function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [listFiltred, setListFiltred] = useState([]);
    
  function filterEntrada() {
    const itensEntradas = listTransactions.filter((item) => {
      return item.type === 'entrada'
    });
    setListFiltred(itensEntradas);
  }
  
  function filterDespesa() {
    const itensDespesas = listTransactions.filter((item) => {
      return item.type === 'despesa'
    });
    setListFiltred(itensDespesas);
  }

  function filterAll() {
    setListFiltred(listTransactions);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img className="nuKenzieHeader" src={nukenzie} alt={nukenzie}></img>
        <button className="buttonHeader">Início</button>
      </header>
      <main>
        <div className='leftPagePart'>
        <Form listTransactions={listTransactions} setListTransactions={setListTransactions} listFiltred={listFiltred} setListFiltred={setListFiltred} />
        <TotalMoney listTransactions={listTransactions}/>
        </div>
        <div className='resumoFinanceiro'>
          <div className='headerResumoFinanceiro'>
            <h3>Resumo Financeiro</h3>
            <section className='buttonsHeaderResumoFinanceiro'>
              <button onClick={filterAll}>Todos</button>
              <button onClick={filterEntrada}>Entradas</button>
              <button onClick={filterDespesa}>Despesas</button>
            </section>
          </div>
          <ul>
            <List listTransactions={listFiltred}/>
          </ul>
        </div>
      </main>
    </div>
  );
}
export default App;
