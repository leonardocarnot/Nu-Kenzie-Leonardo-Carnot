import { useState } from 'react'

function Form({listTransactions, setListTransactions,listFiltred, setListFiltred}) {
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");
    const [type, setType] = useState("entrada");

    
    
    
    function handleTransaction(){
        const transaction = {
            description: description,
            value: value,
            type: type,
        }
        if(transaction.type === 'despesa'){
            transaction.value = Number(-(value))
        }
        setListTransactions([...listTransactions,transaction]);
        setListFiltred([...listTransactions,transaction]);
    }

    return (


        <form className="formInserirValor" onSubmit={(event)=>event.preventDefault()}>
            <div className="containerForm">
            <p>Descrição</p>
            <input className="inputDescricao" type="text" placeholder="Digite aqui sua descrição" onChange={(event) => setDescription(event.target.value)}></input>
            <span>Ex: Compra de roupas</span>
            <div className="divValores">
                <div className="divValor">
                    <p>Valor</p>
                    <input placeholder="1   R$" onChange={(event) => setValue(Number(event.target.value))}></input>
                </div>
                <div className="divTipoValor">
                    <p>Tipo de valor</p>
                    <select onChange={(event) => setType(event.target.value)}>
                    <option value="entrada">Entrada</option>
                    <option value="despesa">Despesa</option>
                    </select>
                </div>
            </div>
            <button onClick={handleTransaction} >Inserir valor</button>
            </div>
        </form>
        
    )
}

export default Form;
