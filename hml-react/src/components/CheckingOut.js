import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import withContext from "../withContext";

class CheckingOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      zipCode: "",
      region:"",
      address: ""
    };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value, error: "" });

  dataAccept = (e) => {
    e.preventDefault();
    const { country, zipCode, region, address } = this.state;
    if (!country || !zipCode || !region ||!address) {
      return this.setState({ error: "Fill all fields!" });
    }
    this.props.context.SendAddress(country, zipCode, region, address)
      .then((sent) => {
        if (!sent) {
          this.setState({ error: "Invalid Address" });
        }
      })
  };

  render() {
      return(
      <>
        <div className="hero is-primary ">
          <div className="hero-body container">
            <h4 className="title">Check Out</h4>
          </div>
        </div>
        <br />
        <br />
        <form onSubmit={this.dataAccept}>
          <div className="columns is-mobile is-centered">
            <div className="column is-one-third">
              <div className="field">
                <label className="label">Country: </label>
                <input
                  className="input"
                  name="country"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label className="label">Zip code: </label>
                <input
                  className="input"
                  name="zipCode"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label className="label">Region: </label>
                <input
                  className="input"
                  name="region"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label className="label">Address: </label>
                <input
                  className="input"
                  name="address"
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
      )
  }
}

export default withContext(CheckingOut);
