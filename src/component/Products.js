import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";
import client from "../client";
import Productlist from "./Productlist";
import { useState, useEffect } from "react";
const Products = () => {
  const [price, setPrice] = useState(50);
  const [catagoryName, setcatagoryName] = useState("All");
  const [data, setData] = useState([]);
  
  useEffect(() => {
    client
      .fetch('*[_type == "product"]{type}')
      .then((data) => setData(data))
      .catch(console.error);

  }, []);
  const Category =[ "All", ...new Set((data.map((i)=> i.type)))]
  
 
  const handleChange = (e) => {
    const value = e.target.value;
    setcatagoryName(value);
    
  };
  return (
    <div className=" m-5 border-dark">
      <div className="row d-flex ">
        <Col className="border-dark col-md-3">
          <h1 className="productCatagory">CATAGORY</h1>
          <div className="Range">
            <label htmlFor="customRange1" className="form-label">
              Price Range
            </label>
            <div>
              <input
                style={{ width: "250px" }}
                type="range"
                className="form-range"
                min="0"
                max="100"
                id="customRange1"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value) 
                }}
              />
              <h6 className="rangeindicator"> {price}</h6>
            </div>
          </div>
          <div className="checkbox mt-5">
          <Form.Group controlId="custom-multi-select">
               <Form.Label>Customized Multi Select</Form.Label>
               <Form.Control as="select" multiple className="rounded-0 shadow">
           {Category.map((i)=>  <option key={i} onClick={handleChange}>{i}</option> )}
           </Form.Control>
          </Form.Group>
          </div>
        </Col>
      
        <Productlist catagoryName={catagoryName} price={price}/>
   
      </div>
    </div>
  );
};

export default Products;
