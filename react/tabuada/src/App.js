import React from 'react';
import Titulo from './Titulo';
import Titulo2 from './Titulo2';
import Tabuada from './Tabuada';
import Cores from './Cores';
import Mensagem from './Mensagem';
import Header from './Header';
import TodoList from './TodoList';
import DidUpdate from './UpdFun';
import ShouldUpdate from './UpdFun';
import BeforeUpdate from './UpdFun';
// import "./styleindex.css";
//  Passando parâmetros para classe - > 

// this.state={
//   itens:[],
//   text:''
// };


// let n = prompt("Informe um número", "5");

//-------------------------------------------------------------------------

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
          <ShouldUpdate></ShouldUpdate>
          <BeforeUpdate></BeforeUpdate>
          <DidUpdate></DidUpdate>
          <button id='8'>8</button>
          <button id='9'>9</button>
          <button id='4'>4</button>
          <button id='5'>5</button>
          <button id='6'>6</button>
          <button id='1'>1</button>
          <button id='2'>2</button>
          <button id='3'>3</button>
          <button id='0'>0</button>

          <h3>Tarefas</h3>
          <TodoList itens={this.state.itens}/>
          <br/>
          <form onSubmit={this.handleSubmit}>
            <input id="new-todo" onChange={this.handleChange} value={this.state.text}/>
            <button>Inserir</button>
          </form>
      </div>
    );
  }
}

//-------------------------------------------------------------------------





// function App() {
//   return (
//     <div>
//       {/* <Titulo />
//       <Titulo2 />
//       <Tabuada /> */}

//       {/* Passando parâmetros para função */}
//       <div class="meio">
//         <div class="coluna">

//           <Header favcol="Amarelo" />

//           <Mensagem />

//           <Cores />

//           <Titulo titulo="Fatec"
//             texto="Faculdade de Tecnologia de Presidente Prudente"
//             link="https://fatecpp.edu.br"
//           />

//           <Titulo2 />






//           <Tabuada numero={n} />
//           <ShouldUpdate />
//           <BeforeUpdate />
//           <DidUpdate />


//           <TodoList/>


//         </div>
//       </div>



//       {/* Passando parâmetros para Classe
//       <Titulo texto = "Componente Titulo com Classe!" />
//       <Titulo2 />
//       <Tabuada numero = {n}/> */}

//     </div>
//   );
// }

export default App;