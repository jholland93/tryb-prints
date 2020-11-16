import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../../context/shopContext'
import { Container, Text, Div, Row, Col } from 'atomize'
import { Link } from 'react-router-dom'



const Products = () => {

    const { fetchAllProducts, products } = useContext(ShopContext)


    useEffect(() => {
        fetchAllProducts()
        return () => {

        };
    }, [fetchAllProducts])

    if (!products) return <div>Loading</div>

    return (
        <Container>
            <Row>
                {products.map(product => (
                    <Col key={product.id} size="3">
                        <Link to={`/product/${product.id}`}>
                            <Div p="1.5rem">
                                <Div
                                    h="20rem"
                                    bgImg={product.images[0].src}
                                    bgSize="cover"
                                    bgPos="centre centre"
                                    shadow="3"
                                    hoverShadow="4"
                                    transition="0.3s"
                                    m={{ b: "1.5rem" }}
                                    rounded="xl"
                                />
                                <Text tag="h1" textWeight="300" textSize="subheader" textDecor="none" textColor="white">{product.title}</Text>
                                <Text tag="h2" textWeight="300" textSize="body" textDecor="none" textColor="white">€ {product.variants[0].price}</Text>
                            </Div>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Products