import styled from 'styled-components'
import React from 'react'
import CartItem from './CartItem'


function CartItems({ cartItems }) {
    return (
        <Container>
            <Title>Shopping Cart</Title>
            <hr />
            <ItemsContainer>
                {
                    cartItems.map((item)=>(
                        <CartItem
                            id={item.id}
                            item={item.product}
                        />
                    ))
                }                
            </ItemsContainer>
        </Container>
    )
}

export default CartItems

const Container = styled.div`
margin-right: 18px;
padding: 20px;
background-color: white;
flex:80%;

`
const Title = styled.div`
font-weight:600;
font-size:30px;
margin-bottom: 8px;
`
const ItemsContainer = styled.div``

