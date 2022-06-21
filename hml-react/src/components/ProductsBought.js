import React,{useState, useEffect} from "react";
import withContext from "../withContext";
import {Link} from "react-router-dom";
import axios from 'axios';


const ProductsBought = props => {
  const {user} = props.context
  const [data, setData] = useState([])


  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    console.log(user)
    const res = await axios.get(
      'http://localhost:9092/hml/api/allBooks',
      { user }
    ).catch((res) => {
      return { status: 401, message: 'Unauthorized' }
    })
    console.log(res)
    if(res.status === 200) {
      setData(res.data)
      console.log(data)
      return true;
    } else {
      return false;
    }
  }
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
        {data ? (
            data.map((product, index) => (
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
                        <span className="tag is-primary" color="yellow">To be delivered!</span>
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
        ): (
          <div className="column">
          <span className="title has-text-grey-light">
            No products found!
          </span>
        </div>
        )}
        </div>
      </div>
    </>
  );
};

export default withContext(ProductsBought);
