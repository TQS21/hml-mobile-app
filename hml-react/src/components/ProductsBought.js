import React from "react";
import withContext from "../withContext";
import {Link} from "react-router-dom";


const ProductsBought = props => {
  const { products } = props.context;


  return (
    <>
      <div className="hero is-primary">
        <div className="hero-body container">
          <h4 className="title">Products Bought</h4>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="column columns is-multiline">
        {
            products.map((product, index) => (
                <div className=" column is-half" style={{marginTop:30}}>
                <div className="box">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-64x64">
                        <img
                          src={product.coverUrlPath}
                          alt={product.author}
                        />
                      </figure>
                    </div>
                    <div className="media-content">
                    <b style={{ textTransform: "capitalize" }}>
                        {product.title}{" "}
                        <span className="tag is-primary">To be delivered!</span>
                    </b>
                      <div>{product.author}</div>
                      <div className="is-clearfix">
                        <Link to={{pathname:'/Specification', state:{product : product}}}>
                          <button
                            className="button is-small is-outlined is-primary   is-pulled-right"
                          >
                            See Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
        }
        </div>
      </div>
    </>
  );
};

export default withContext(ProductsBought);
