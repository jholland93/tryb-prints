/* eslint-disable array-callback-return */
import React, { Component } from "react";
import Client from "shopify-buy";
import { toast } from "react-toastify";

const ShopContext = React.createContext();

const client = Client.buildClient({
  domain: "trybprintgalway.myshopify.com",
  storefrontAccessToken: "e68d9a59ecd364e40db89d75d2a2085f",
});

class ShopProvider extends Component {
  state = {
    products: [],
    product: {},
    checkout: {},
    isCartOpen: false,
    test: "test",
  };

  componentDidMount() {
    //this.createCheckout();

    //Check If local storage has a checkout_id saved
    if (localStorage.checkout) {
      this.fetchCheckout(localStorage.checkout)
    } else {
      this.createCheckout();
    }
    //If there is not checkout_id in local storage then we will create a new checkout

    // else fetch the checkout from shopify 

  }

  createCheckout = async () => {
    const checkout = await client.checkout.create();
    localStorage.setItem("checkout", checkout.id)
    this.setState({ checkout: checkout });
  };

  fetchCheckout = async (checkoutId) => {
    client.checkout.fetch(checkoutId).then(checkout => {
      this.setState({ checkout: checkout });
    }).catch(err => console.log(err))
  }

  addItemToCheckout = async (variantId, quantity) => {
    const lineItemToAdd = [
      {
        variantId,
        quantity: parseInt(quantity, 10),
      },
    ];

    // Notification after adding item to cart
    toast.success("Added product to the Cart.", {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    const checkout = await client.checkout.addLineItems(
      this.state.checkout.id,
      lineItemToAdd
    );
    this.setState({ checkout: checkout, isCartOpen: true });
  };

  fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    this.setState({ products: products });
  };

  fetchProductWithId = async (id) => {
    const product = await client.product.fetch(id);
    this.setState({ product: product });
  };

  closeCart = () => {
    this.setState({ isCartOpen: false });
  };

  openCart = () => {
    this.setState({ isCartOpen: true });
  };


  //    Clear cart function to clear cart item

  clearCart = async () => {
    const lineItemIdsToRemove = [];
    this.state.checkout.lineItems &&
      this.state.checkout.lineItems.map((item) => {
        lineItemIdsToRemove.push(item.id);
      });
    await client.checkout
      .removeLineItems(this.state.checkout.id, lineItemIdsToRemove)
      .then((checkout) => {
        this.setState({ checkout: checkout, isCartOpen: false });
      });
    toast.success("Cart succussfully cleared.", {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  removeCartItem = async (id) => {
    await client.checkout
      .removeLineItems(this.state.checkout.id, [id])
      .then((checkout) => {
        this.setState({ checkout: checkout });
      });
    toast.success("Item removed successfully.", {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          fetchAllProducts: this.fetchAllProducts,
          fetchProductWithId: this.fetchProductWithId,
          closeCart: this.closeCart,
          openCart: this.openCart,
          clearCart: this.clearCart,
          addItemToCheckout: this.addItemToCheckout,
          removeCartItem: this.removeCartItem,
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

const ShopConsumer = ShopContext.Consumer;
export { ShopConsumer, ShopContext };
export default ShopProvider;
