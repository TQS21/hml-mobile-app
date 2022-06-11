import React from "react";
import withContext from "../withContext";
import './Specification.css';

const Specification = props => {
  const {product} = props.location.state;
  return (
    <>
      <div className="hero is-primary">
        <div className="hero-body container">
          <h4 className="title">Our Products</h4>
        </div>
      </div>
      <br />


      <main class="container">
      <div className="left-column">
        <img data-image="black" src={product.coverUrlPath} alt=""/>
      </div>
      <div class="right-column">
        <div class="product-description">
          <h1>{product.title}</h1>
          <h4>by {product.author}</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices, erat id venenatis venenatis, purus tortor fermentum ipsum, in fringilla eros felis non justo. Morbi placerat lorem a elit pellentesque auctor. </p>
        </div>
        <div class="product-price">
          <span>{product.price}$</span>
          { product.available ?
                          <button
                          className="cart-btn"
                          onClick={() =>
                            props.context.addToCart({
                              id: product.title,
                              product,
                              amount: 1
                            })
                          }
                        >
                          Add to Cart
                        </button> : 
            <div class="unavailable">
              <button>The Product is not available</button>
            </div>
          }
        </div>
        </div>
      </main>
    </>
  );
};

export default withContext(Specification);