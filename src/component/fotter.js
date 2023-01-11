import React from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocalPhoneSharpIcon from "@mui/icons-material/LocalPhoneSharp";
import "./fotter.css"

const Fotter = () => {
  return (
    <footer className="bg-light mt-5  ">
      <Container className="text-dark">
        <Row>
          <Col className="col-md-3 col-6 d-flex flex-column align-items-start mt-3 mainFooterContact">
            <h3 className="mainFooter text-success" >CONTACT</h3>
            <div className="p-2"><span> 208 Shanda Dr </span>
            <span> Monroe OH </span></div>
            <div className ="p-2">Flex item 3</div>
          </Col>
          <Col className=" col-md-3 col-6 d-flex flex-column  align-items-start mt-3 mainFooter">
            <h3 className="mainFooter text-success">CATAGORY</h3>
            <div className="p-2 "> MENS</div>
            <div className="p-2 "> WOMENS</div>
            <div className="p-2"> PRODUCTS</div>
            <div className="p-2 "> OTHER</div>
          </Col>
          <Col className="col-md-3 col-6 d-flex flex-column  align-items-start mt-3 mainFooter">
            <h3 className="mainFooter text-success" >LINKS</h3>

            <div className="mt-2">
              <FacebookOutlinedIcon fontSize="large"></FacebookOutlinedIcon>FaceBook{" "}
            </div>
            <div className="mt-2">
              <TwitterIcon fontSize="large"></TwitterIcon>Twitter
            </div>
            <div className="mt-2">
              <LocalPhoneSharpIcon fontSize="large"></LocalPhoneSharpIcon>
              315-278-6984
            </div>
          </Col>
          <Col className=" col-md-3 col-6 d-flex flex-column  align-items-start mt-3 mainFooter">
            <h3 className="mainFooter text-success">LINKS</h3>

            <div className="mt-2">
              <FacebookOutlinedIcon fontSize="large"></FacebookOutlinedIcon>{" "}
              FaceBook{" "}
            </div>
            <div className="mt-2">
              <TwitterIcon fontSize="large"></TwitterIcon>Twitter
            </div>
            <div className="mt-2">
              <LocalPhoneSharpIcon fontSize="large"></LocalPhoneSharpIcon>
              315-278-6984
            </div>
          </Col>
        </Row>
       <Row className="d-flex justify-content-center"> @Copyright by टेK शोP. All Rights Reserved.</Row>
      </Container>
    </footer>
  );
};

export default Fotter;
