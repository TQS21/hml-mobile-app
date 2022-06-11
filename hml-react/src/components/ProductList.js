import React from "react";
import ProductItem from "./ProductItem";
import withContext from "../withContext";
import {useState} from "react";

const ProductList = props => {
  const { products } = props.context;
  const [query, setQuery] = useState("")


  return (
    <>
      <div className="hero is-primary">
        <div className="hero-body container">
          <h4 className="title">Our Products</h4>
        </div>
      </div>
      <br />
      <div className="container">
        <div>
          <input style={{position:'absolute', display:'flex', width:'80%', right:'10%', border:'1px solid grey', borderRadius:5, height:40}} placeholder="Enter Book Title"  onChange={event => setQuery(event.target.value)}/>
        </div>
        <div className="column columns is-multiline">
        {
            products.filter(product => {
              if (query === '') {
                return product;
              } else if (product.title.toLowerCase().startsWith(query.toLowerCase())) {
                return product;
              }
            }).map((product, index) => (
              <ProductItem
                product={product}
                key={index}
                addToCart={props.context.addToCart}
              />
            ))
        }
        </div>
      </div>
    </>
  );
};

export default withContext(ProductList);
