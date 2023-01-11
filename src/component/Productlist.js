import React from 'react'
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import urlFor from "../imageBuilder";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import client from "../client";
import { useState, useEffect } from "react";
const Productlist = ({catagoryName, price }) => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        let gQuery = '*[_type == "product"';
        if (catagoryName !== 'All') {
          gQuery += ` && type match "${catagoryName}" `;
        }
        if (price !== 'all') {
           
            gQuery += ` && price <= ${price} `;
          }
          gQuery += `]`
         
      client
        .fetch(gQuery)
        .then((data) => setData(data))
        .catch(console.error);
    }, [catagoryName, price]);
       // console.log(data);
  return (
    <Col className="col-sm-9">
    <Row
      sm={2}
      className="justify-content-start"
      style={{ marginLeft: "10px" }}
    >
      {data &&
        data.length > 0 &&
        data.map((i) => (
          <Col
            md="auto d-flex"
            key={i._id}
            onClick={() => {
              navigate(`/page2/${i._id}`);
            }}
          >
            <Card
              className="card1"
              style={{ width: "13rem", marginTop: "20px" }}
            >
              <Card.Img
                variant="top"
                src={urlFor(i.image[0])}
                style={{ height: "13rem" }}
                key={i._id}
              />
              <Card.Body>
                <Card.Title>${i.price}</Card.Title>
                <Card.Text>{i.name}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </Row>
  </Col>
  )
}

export default Productlist