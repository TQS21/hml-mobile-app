import React, { Component } from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';

import AddProduct from './components/AddProduct';
import Cart from './components/Cart';
import Login from './components/Login';
import ProductList from './components/ProductList';
import Specification from './components/Specification';
import Register from './components/Register';
import ProductsBought from "./components/ProductsBought";
import CheckingOut from "./components/CheckingOut";



import Context from "./Context";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      cart: {},
      products: []
    };
    this.routerRef = React.createRef();
  }

    async componentDidMount() {
    let user = localStorage.getItem("user");
    let cart = localStorage.getItem("cart");

    const products = await axios.get('http://deti-tqs-05:9092/hml/api/allBooks');
    user = user ? JSON.parse(user) : null;
    cart = cart? JSON.parse(cart) : {};

    this.setState({ user,  products: products.data, cart });
  }

  login = async (email, password) => {
    const res = await axios.post(
      'http://deti-tqs-05:9092/hml/api/login',
      { email, password },
    ).catch((res) => {
      return { status: 401, message: 'Unauthorized' }
    })
    if(res.status === 200) {
      const user = {
        email:res.data.email,
        name:res.data.name,
        phone: res.data.phone,
        password: res.data.password
      }
      this.setState({ user });
      localStorage.setItem("user", JSON.stringify(user));
      return true;
    } else {
      return false;
    }
  }

  register = async (name, email, password, phone) => {
    const res = await axios.post(
      'http://deti-tqs-05:9092/hml/api/register',
      { name, email, password, phone },
    ).catch((res) => {
      console.log(res)
      return { status: 401, message: 'Unauthorized' }
    })
    console.log(res.status)
    if(res.status === 202) {
      const user = {
        email:res.data.email,
        name:res.data.name,
        phone: res.data.phone
      }
      this.setState({ user });
      localStorage.setItem("user", JSON.stringify(user));
      return true;
    } else {
      return false;
    }
  }

  logout = e => {
    e.preventDefault();
    this.setState({ user: null });
    localStorage.removeItem("user");
  };

  addProduct = (product, callback) => {
    let products = this.state.products.slice();
    products.push(product);
    this.setState({ products }, () => callback && callback());
  };

  addToCart = cartItem => {
    const uu = this.state.user
    console.log(uu)
    let cart = this.state.cart;
    console.log(cartItem)
    if (cart[cartItem.id]) {
      cart[cartItem.id].amount += cartItem.amount;
    } else {
      cart[cartItem.id] = cartItem;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    this.setState({ cart });
  };

  removeFromCart = cartItemId => {
    let cart = this.state.cart;
    delete cart[cartItemId];
    localStorage.setItem("cart", JSON.stringify(cart));
    this.setState({ cart });
  };

  clearCart = () => {
    let cart = {};
    localStorage.removeItem("cart");
    this.setState({ cart });
  };

  checkout = () => {
    if (!this.state.user) {
      let status = "pending"
      this.routerRef.current.history.push("/login");
      return;
    }
    else {
      console.log(this.state.cart)
      this.routerRef.current.history.push("/checking-out");
      return;
    }
  };

  SendAddress = async (country, zipCode, region, add) => {

    const userDTO = this.state.user
    const address = {
      country: country,
      zip_code: zipCode,
      region: region,
      address: add
    }
    const orderDTO = {
      userDTO: userDTO,
      address: address
    }
    const res = await axios.post(
      'http://deti-tqs-05:9092/hml/api/delivery',
      { userDTO, address },
    ).catch((res) => {
      return { status: 401, message: 'Unauthorized' }
    })
    if(res.status === 200) {
      this.routerRef.current.history.push("/products-bought");
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          removeFromCart: this.removeFromCart,
          addToCart: this.addToCart,
          login: this.login,
          addProduct: this.addProduct,
          clearCart: this.clearCart,
          checkout: this.checkout,
          register: this.register,
          SendAddress: this.SendAddress
        }}
      >
        <Router ref={this.routerRef}>
        <div className="App">
          <nav
            className="navbar container"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <b className="navbar-item is-size-4 ">HML - Book Delivery</b>
              <label
                role="button"
                className="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                onClick={e => {
                  e.preventDefault();
                  this.setState({ showMenu: !this.state.showMenu });
                }}
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </label>
            </div>
              <div className={`navbar-menu ${
                  this.state.showMenu ? "is-active" : ""
                }`}>
                <Link to="/products" className="navbar-item">
                  Products
                </Link>
                {this.state.user && this.state.user.accessLevel < 1 && (
                  <Link to="/add-product" className="navbar-item">
                    Add Product
                  </Link>
                )}
                <Link to="/cart" className="navbar-item">
                  Cart
                  <span
                    className="tag is-primary"
                    style={{ marginLeft: "5px" }}
                  >
                    { Object.keys(this.state.cart).length }
                  </span>
                </Link>
                {!this.state.user ? (
                  <>
                  <Link to="/login" className="navbar-item">
                    Login
                  </Link>

                  <Link to="/register" className="navbar-item">
                    Register
                  </Link>
                  </>
                ) : (
                  <>
                  <Link to="/products-bought" className="navbar-item">
                    Products Bought
                  </Link>

                  <Link to="/" onClick={this.logout} className="navbar-item">
                    Logout
                  </Link>
                  </>
                )}
              </div>
              {this.state.user ? (
              <div className='navbar-item ms-auto'>
                Hello {this.state.user.name}
              </div>
              ) : (null)}
            </nav>
            <Switch>
              <Route exact path="/" component={ProductList} title="Products" />
              <Route exact path="/login" component={Login} title="Login"/>
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/add-product" component={AddProduct} />
              <Route exact path="/products" component={ProductList} />
              <Route exact path="/specification" component={Specification} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/products-bought" component={ProductsBought} />
              <Route exact path="/checking-out" component={CheckingOut} />
            </Switch>
          </div>
        </Router>
      </Context.Provider>
    );
  }
}
