import React from "react";
import {Link} from "react-router-dom";

const ProductItem = props => {
  const { product } = props;
  return (
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
              <span className="tag is-primary">${product.price}</span>
            </b>
            <div>{product.author}</div>
              {!product.available ? <small className="has-text-danger">Out Of Stock</small>:<></>}
            <div className="is-clearfix">
              <button
                className="button is-small is-outlined is-primary   is-pulled-right"
                onClick={() =>
                  props.addToCart({
                    id: product.id,
                    product,
                    amount: 1
                  })
                }
              >
                Add to Cart
              </button>
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
  );
};

export default ProductItem;
