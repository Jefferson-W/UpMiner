import './App.css'
import { Component } from 'react';
import { Header } from './components/Header';
import { data } from "./services/data";
import ProductList from './components/Product/ProductList';
import AppRouter from './routes';


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

    return (

      <div>
        <AppRouter />
        <Header />
        <ProductList products={this.state.productCopy} handleBtns={this.handleBtns} />

      </div>

    );
  }
}

export default App;
