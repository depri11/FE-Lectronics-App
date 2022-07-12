import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../../components/header/navbar'
import Cards from '../../components/card/card'
import Footer from '../../components/footer/footer'

function Products() {
    return (
        <>
            <Header />
            <Container>
                <Cards />
            </Container>
            <Footer />
        </>
    )
}

export default Products
