import { useNavigate } from 'react-router-dom';
import Principal from '../../comum/componentes/Principal/Principal';
import './PaginaInicial.css';
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado'


const PaginaInicial = () => {
  const navigate = useNavigate();

  return <Principal titulo="Página Inicial" >
    
      <BotaoCustomizado
        
        aoClicar={() => navigate('/produtos')}
      >PaginaListaProdutos</BotaoCustomizado>

    


  </Principal>;
};

export default PaginaInicial;
