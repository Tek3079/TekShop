import React from "react";
import "./Navbar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { useState } from "react";
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Cart from "./Cart";
import { useSelector } from "react-redux";

const Navbars = () => {
  const [open, setOpen] = useState(false);
  let sum = 0;
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="mainDiv ">
    
     
      <Navbar bg="none" expand="lg">
      <Container >
  
        <Navbar.Brand as={Link} to="/">  <h3 className="brand-name">टेK शोP </h3></Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
      
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
            bg="dark"
            
          >
            <Nav className="nav nav-pills nav-fill">
                <Nav.Link className="text-dark " as={Link} to="/">Home</Nav.Link>
                <Nav.Link className="text-dark" as={Link} to="/Mens">Mens</Nav.Link>
                <Nav.Link className="text-dark" as={Link} to="/Womens">Womens</Nav.Link>
                <Nav.Link className="text-dark" as={Link} to="/Products">Product</Nav.Link>
                </Nav>
          </Nav>
          
          <Form className="d-flex search-bar">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <div className="icons " onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon fontSize="large" />
              <span className="iconspan">
                {products.forEach((item) => {
                  sum += item.quantity;
                })}{" "}
                {sum}
              </span>
              {products.quantity}
            </div>
        </Navbar.Collapse>
       
      </Container>
    </Navbar>
    {open && <Cart />}
    </div>
  );
};

export default Navbars;
