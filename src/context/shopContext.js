import React, { Component } from 'react'
import Client from 'shopify-buy'

const ShopContext = React.createContext()

const client = Client.buildClient({
    domain: 'trybprintgalway.myshopify.com',
    storefrontAccessToken: 'e68d9a59ecd364e40db89d75d2a2085f'
});

class ShopProvider extends Component {

    state = {
        products: [],
        product: {},
        checkout: {},
        isCartOpen: false,
        test: 'test'
    }


    componentDidMount() {
        this.createCheckout()
    }


    createCheckout = async () => {
        const checkout = await client.checkout.create()
        this.setState({ checkout: checkout })
    }

    addItemToCheckout = async (variantId, quantity) => {
        const lineItemToAdd = [{
            variantId,
            quantity: parseInt(quantity, 10)
        }]

        const checkout = await client.checkout.addLineItems(this.state.checkout.id, lineItemToAdd)
        this.setState({ checkout: checkout, isCartOpen: true })
    }

    fetchAllProducts = async () => {
        const products = await client.product.fetchAll()
        this.setState({ products: products })
    }

    fetchProductWithId = async (id) => {
        const product = await client.product.fetch(id)
        this.setState({ product: product })
    }

    closeCart = () => { this.setState({ isCartOpen: false }) }

    openCart = () => { this.setState({ isCartOpen: true }) }



    render() {
        return (
            <ShopContext.Provider value={{
                ...this.state,
                fetchAllProducts: this.fetchAllProducts,
                fetchProductWithId: this.fetchProductWithId,
                closeCart: this.closeCart,
                openCart: this.openCart,
                addItemToCheckout: this.addItemToCheckout
            }} >
                {this.props.children}
            </ ShopContext.Provider>
        )
    }
}


const ShopConsumer = ShopContext.Consumer
export { ShopConsumer, ShopContext }
export default ShopProvider