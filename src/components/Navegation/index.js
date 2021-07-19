import React from 'react';

export default function Bar(props) {
  return (

    <React.Fragment>
      <div className="cards-container">
        <div className="cards">
          <p><i class="fas fa-briefcase"></i>
          </p>
          <p> {props.product.cat}</p>
          <p className="card-description">{props.product.desc}</p>

          <div className="cards-bottom">
            <div>{props.product.price} <button className="btt-cards"> <b>Saiba mais</b> </button> </div>
          </div>

        </div>
      </div>

    </React.Fragment >
  );


}