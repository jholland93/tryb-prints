import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
import { Text, Div, Button, Row, Col, Container, Image } from "atomize";
import { Link } from "react-router-dom";

const ProductPage = () => {
  let { id } = useParams();
  const { fetchProductWithId, addItemToCheckout, product } = useContext(
    ShopContext
  );

  

  useEffect(() => {
    fetchProductWithId(id);
    return () => {};
  }, [fetchProductWithId, id]);

  if (!product.title) return <div>loading</div>;

  return (

    <Container>
      <Row bg="black" rounded="lg" d="flex"
      m="6rem">
        <Col size="5">
          <Image src={product.images[0].src} w="20rem" p="2rem"/>
        </Col>
        <Col align="space-around" >
          <Text tag="h1" textColor="white" textWeight="200" m={{ y: "2rem" }} >
            {product.title}
          </Text>
          <Text tag="h3" textColor="white" m={{ y: "2rem" }} textWeight="200">
          € {product.variants[0].price}
          </Text>
          <Button
            rounded="lg"
            shadow="3"
            bg="black500"
            m={{ y: "2rem" }}
            onClick={() => addItemToCheckout(product.variants[0].id, 1)}
          >
            Add to Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
