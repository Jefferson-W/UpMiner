
import React from 'react';
import Bars from '../Navegation';


export default function ProductList(props) {
  return (
    <React.Fragment>


      <div className="bar">
        <button value="Todos" onClick={props.handleBtns} className="cards-bar">
          <p><i class="fas fa-globe"></i></p>
          <p>Todos</p>
        </button>


        <button value="Profissional" onClick={props.handleBtns} className="cards-bar">
          <p><i class="fas fa-briefcase"> </i></p>
          <p>Profissional</p>
        </button>

        <button value="Reguladores" onClick={props.handleBtns} className="cards-bar">
          <p><i class="fas fa-university"></i></p>
          <p>Reguladores</p>
        </button>

        <button value="Sócio ambiental" onClick={props.handleBtns} className="cards-bar">
          <p><i class="fas fa-tree"></i></p>
          <p>Sócio Ambiental</p>
        </button>

        <button value="Juridico" onClick={props.handleBtns} className="cards-bar">
          <p><i class="fas fa-gavel"></i></p>
          <p>Juridico</p>
        </button>

        <button value="Listas" onClick={props.handleBtns} className="cards-bar">
          <p><i class="fas fa-ban"></i></p>
          <p>Listas Restritivas</p>
        </button>

        <button value="Midia" onClick={props.handleBtns} className="cards-bar">
          <p><i class="fas fa-globe"></i></p>
          <p>Midia / Internet</p>
        </button>

        <button value="Bens" onClick={props.handleBtns} className="cards-bar">
          <p><i class="fas fa-gem"></i></p>
          <p>Bens e imovéis</p>
        </button>

        <button value="Cadastro" onClick={props.handleBtns} className="cards-bar">
          <p><i class="fas fa-male"></i></p>
          <p>Cadastro</p>
        </button>

        <button value="Financeiro" onClick={props.handleBtns} className="cards-bar">
          <p><i class="fas fa-piggy-bank"></i></p>
          <p>Financeiro</p>
        </button>

      </div>

      <div className="container-cards-filter">

        {props.products.map(product => {
          return <Bars
            key={product.id}
            product={product} />
        })}
      </div>
    </React.Fragment>

  )
}