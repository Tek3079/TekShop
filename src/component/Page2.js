import { useParams } from "react-router-dom";
import client from "../client";
import urlFor from "../imageBuilder";
import Image from "react-bootstrap/Image";
import { Button, Carousel } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import { addToCart } from "../redux/cartReducer";
import { useDispatch } from "react-redux";

const Page2 = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  useEffect(() => {
    client
      .fetch('*[_type == "product"]')
      .then((data) => setData(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <Row>
        <Col sm={4}>
          <Carousel className="d-flex w-75 p-3 " variant="dark" interval={null}>
            {" "}
            {data &&
              data.length > 0 &&
              data
                .find((i) => i._id === id)
                .image.map((j, index) => (
                  <Carousel.Item key={index}>
                    <Image
                      src={urlFor(j)}
                      alt={index}
                      height={"600px"}
                      width={"100%"}
                      
                    />
                  </Carousel.Item>
                ))}
          </Carousel>
        </Col>
        <Col sm={6}>
          {" "}
          <div className="mt-5">
            <h1 className="productDes">
              A product detail page, also known as a PDP, is a web page on an
              eCommerce website that provides information on a specific product.{" "}
            </h1>
            <Col sm={4} className="d-flex  mt-5">
              <Button
                className="bg-white text-black border-dark rounded-0 btn-lg"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </Button>
              <h3 className="productQty">{quantity}</h3>
              <Button
                className="bg-white text-black border-dark rounded-0 btn-lg"
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              >
                -
              </Button>
            </Col>
            <div className="mt-5">
              <Button
                className="bg-white text-black border-dark rounded-0 btn-lg"
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: data.find((i) => i._id === id)._id,
                      title: data.find((i) => i._id === id).name,
                      price: data.find((i) => i._id === id).price,
                      img: data.find((i) => i._id === id).image[0],
                      desc: "this is me",

                      quantity,
                    })
                  )
                }
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Page2;
