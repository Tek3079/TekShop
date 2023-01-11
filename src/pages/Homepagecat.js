import React from "react";
import "./Homepagecat.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Homepagecat = () => {
  return (
    <div className="container-fluid">
        <div className="center-div">
        <Row>
            <Col className="col-lg-6 col-12 ">
                <Row>
                    <Col className="col-12 top-div ">   <img className="img1"
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
           <button className="btn">Button</button></Col>
                    <Col className="col-12 top-div mt-2">  <img className="img1" 
       
            src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
        
          /></Col>
                </Row>
            </Col>
            <Col className="col-lg-6 col-12 ">
                <Row >
                    <Col className="col-12 bottom_first_div "> <img className="img1"
           src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
           alt=""
          /></Col>
                </Row>
                <Row className="mt-2">
                    <Col className="col-md-6 col-12 bottom_sec_div "><img className="img1"
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          /></Col>
                    <Col className="col-md-6 col-12 bottom_sec_div "><img className="img1"
             src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
             alt=""
          /></Col>
                </Row>

            </Col>

        </Row>
     
    </div>
    </div>
  );
};

export default Homepagecat;
