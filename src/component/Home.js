import { Carousel, Container } from 'react-bootstrap';
import React from 'react';
import Image from 'react-bootstrap/Image'
import urlFor from '../imageBuilder';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import client from "../client";
import { useState, useEffect } from "react";
import "./home.css"
import Marquee from "react-fast-marquee";
import Homepagecat from '../pages/Homepagecat';

function Home ({data}) {
  
  const navigate = useNavigate();

  const [newdata, setnewData] = useState([]);
  let newArray = newdata.slice(0,5)
  useEffect(() => {
    client
      .fetch('*[_type == "product"]')
      .then((newdata) => setnewData(newdata))
      .catch(console.error);

  }, []);
  
  return (
  <div className='mt-5'>
 
     <Carousel variant="dark" className="carousel-main "  >
     {data.length && data.map(i => ( <Carousel.Item key={i._id}>
      <Row className="d-flex ">
        <Col className='col-6 d-flex align-items-end flex-column justify-content-center'>
        <h3 className='text-danger'>20% SALE ON EVERYTHING</h3>
      <Button className='bg-white text-black border-dark rounded-0 btn-lg ' onClick={() => {
                          navigate(`/Products`);
                        }}>{i.buttonText}</Button>
                         </Col>
      <Col className='d-flex justify-content-center align-items-center'> </Col>
      <Col >
      <Image  className="carousel-img"src={urlFor(i.image)} alt={i._id} height={"300px"} width={"300px"} />
      </Col>
      </Row>
      

       
      </Carousel.Item>))}
      </Carousel>
  
                          <div className='mt-3'></div>
    
                        <Homepagecat />


        <Container >
          <div className='new-arrival'> New Arrivals</div>
         
          <Marquee speed={50} pauseOnHover={true} style={{background:"light-gray"}}>
            <div className="marquee-div">
            
          {newArray &&
              newArray.length > 0 &&
              newArray.map((i) => (
                
                <Col md="auto d-flex"  key={i._id} onClick={() => {
                  navigate(`/page2/${i._id}`);
                }}>
                  <Card className= "card1"
                    
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
               
              </div>
       
                </Marquee>
               
   
        </Container>


    </div>
  )
}

export default Home