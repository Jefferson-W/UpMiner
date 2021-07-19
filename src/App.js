import './App.css'
import { Component } from 'react';
import { Header } from './components/Header';
// import Bar from './components/Navegation';
import { data } from "./data";
import ProductList from './ProductList';



class App extends Component {

  state = {
    products: data,
    productCopy: []
  }

  handleBtns = (e) => {

    console.log(e.target.value)
    let productCopy;

    if (e.target.value === "Todos") {
      productCopy = this.state.products;

    } else {
      productCopy = this.state.products.filter(item => item.cat === e.target.value)
    }


    this.setState({
      productCopy: productCopy
    })


  }




  render() {

    // if (!this.state.productsCopy[0]) {
    //   return (<span>Loading</span>)
    // }

    return (

      <div>


        <Header />
        <ProductList products={this.state.productCopy} handleBtns={this.handleBtns} />
        {/* <Bar products={this.state.productsCopy} handleBtns={this.handleBtns} /> */}

        {/* <Cards /> */}



      </div>


    );
  }
}

export default App;
