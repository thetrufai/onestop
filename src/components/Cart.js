import styled from 'styled-components'
import React from 'react'
import CartItems from './CartItems'
import CartTotal from './CartTotal'

function Cart({ cartItems }) {

    const getTotalPrice = () => {
        let total = 0;
        cartItems.forEach((item) => {
            total += (item.product.price * item.product.quantity)
            
        })
        return total;

    }

    const getCount = () => {
        let count = 0;
        cartItems.forEach((item) => {
            count += item.product.quantity;
        })

        return count;
    }




    return (
        <Container>        
            <CartItems cartItems={cartItems} />
            <CartTotal getCount={getCount}  getTotalPrice={getTotalPrice}/>
        </Container>
    )
}

export default Cart

const Container = styled.div`s
padding-top:14px;
padding-right: 18px;
padding-bottom:0px;3
padding-left:18px;
display: flex;
align-items: flex-start;

`