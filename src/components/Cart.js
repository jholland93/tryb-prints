import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { Div, SideDrawer, Text, Row, Col, Anchor, Icon } from "atomize";

const Cart = () => {
  const {
    isCartOpen,
    closeCart,
    checkout,
    clearCart,
    removeCartItem,
  } = useContext(ShopContext);

  return (
    <SideDrawer isOpen={isCartOpen} onClose={closeCart}>
      <Icon
        name="Cross"
        pos="absolute"
        top="1rem"
        right="1rem"
        size="16px"
        onClick={closeCart}
        cursor="pointer"
      />
      <Div d="flex" flexDir="column" m={{ b: "4rem" }}>
        {checkout.lineItems &&
          checkout.lineItems.map((item) => (
            <Row key={item.id}>
              <Col>
                <Div
                  bgImg={item.variant.image.src}
                  bgSize="cover"
                  bgPos="center center"
                  h="5rem"
                  w="4rem"
                />
              </Col>
              <Col>
                <Text>{item.title}</Text>
                <Text>{item.variant.title}</Text>
                <Text>{item.quantity}</Text>
              </Col>
              <Col>
                <Text>{item.variant.price}</Text>
              </Col>
              <a onClick={() => removeCartItem(item.id)}>Remove</a>
            </Row>
          ))}
        <Anchor onClick={clearCart}>Clear Cart</Anchor>

        <Anchor href={checkout.webUrl} target="_blank">
          Checkout
        </Anchor>
      </Div>
    </SideDrawer>
  );
};

export default Cart;
