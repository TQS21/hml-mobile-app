import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import withContext from "../withContext";

class Register extends Component {
    constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      repPass:"",
      phone:0,
    };
  }
  handleChange = e => this.setState({ [e.target.name]: e.target.value, error: "" });

  register = (e) => {
    e.preventDefault();

    const { username, email, password,repPass, phone } = this.state;
    if (!username || !password || !repPass || !email || !phone) {
      return this.setState({ error: "Fill all fields!" });
    }
    if(repPass!==password){
      return this.setState({ error: "Passwords do not match!" });
    }
    
    this.props.context.register(username, email, password, parseInt(phone))
      .then((loggedIn) => {
        if (!loggedIn) {
          this.setState({ error: "Invalid Credentails!" });
        }
        else{
        }
      })
  };

  render() {
    return !this.props.context.user ? (
      <>
        <div className="hero is-primary ">
          <div className="hero-body container">
            <h4 className="title">Register</h4>
          </div>
        </div>
        <br />
        <br />
        <form onSubmit={this.register}>
          <div className="columns is-mobile is-centered">
            <div className="column is-one-third">
              <div className="field">
                <label className="label">Username: </label>
                <input
                  className="input"
                  type="username"
                  name="username"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label className="label">Email: </label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label className="label">Phone Number: </label>
                <input
                  className="input"
                  type="number"
                  name="phone"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label className="label">Password: </label>
                <input
                  className="input"
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label className="label">Repeat Password: </label>
                <input
                  className="input"
                  type="password"
                  name="repPass"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.error && (
                <div className="has-text-danger">{this.state.error}</div>
              )}
              <div className="field is-clearfix">
                <button
                  className="button is-primary is-outlined is-pulled-right"
                >
                  Submit
                </button>
              </div>
              
            </div>
            
          </div>
        </form>
        
      </>
    ) : (
      <Redirect to="/products" />
    );
  }
}

export default withContext(Register);