import { useState } from "react";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../comum/componentes/Principal/Principal";
import './PaginaListaProdutos.css'
const PaginaListaProdutos=()=>{
    const[nome,setNome]=useState('')
    const[preco,setPreco]=useState('')
    const[lista,setLista]=useState([])
    
    const input=(e)=>{
        setNome(e.target.value)
    }
    const input2=(e)=>{
        setPreco(e.target.value)
    }
    
    const botao=()=>{
        if (nome==''||preco=='') {
            alert('preencha os dois campos')
        }else{if (nome&&preco) {
          const produtos={nome,preco}
          setLista([...lista,produtos])  
          setNome('')
          setPreco('')
        } }
         
    }
    const remover=(index)=>{
        if (confirm(`Tem certeza que deseja excluir? ${nome}`
    )){const atualizar=([...lista])
        atualizar.splice(index.target.value,1)
        setLista([...atualizar])}
        
        
    }
    return(
        <>
        <Principal titulo={`Lista de Produtos (${lista.length})`}
      voltarPara="/">
            <div className="padrao">
                <input type="text" placeholder="nome" value={nome} onChange={input}/>
                <input type="text" placeholder="preco" value={preco} onChange={input2}/>
                <BotaoCustomizado aoClicar={botao}>enviar</BotaoCustomizado>
            </div>
               {lista.map((produto,index)=>(
                <div  className="padrao2" key={index}>
                    <strong>Nome:</strong>{produto.nome} <br/>
                    <strong>Preço:</strong>{produto.preco}
                    <div className="padrao3"><button value={index} className="padrao4" onClick={remover}> R </button></div>
                </div>
                
            ))}
             {lista.length === 0 && (
        <span >
          Não tem nada para listar.
        </span>
      )}
            
            
            



        </Principal>
        </>
    )
}
export default PaginaListaProdutos;
