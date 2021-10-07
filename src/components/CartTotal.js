import React from 'react'
import styled from 'styled-components'
import NumberFormat from 'react-number-format'

function CartTotal({ getTotalPrice, getCount }) {

    return (
        <Container>
            <Subtotal>Subtotal ({getCount()}) Items:
                <NumberFormat value={getTotalPrice()} displayType={'text'}
                    thousandSeparator={true} prefix={'$'} />
            </Subtotal>
            <hr/>
            <CheckoutButton>Proceed To Checkout</CheckoutButton>
        </Container>
    )
}

export default CartTotal

const Container = styled.div`
flex: 35%;
background-color: white;
padding:20px;
`
const Subtotal = styled.div`
font-weight:600;
font-size:30px;
margin-bottom: 8px;
`
const CheckoutButton = styled.button`
background-color: #f0c14b;
width: 100%;
padding: 4px 8px;
border: 2px solid #gray;
border-radius: 4px;
cursor: pointer;
font-size: 16px;
:hover {
    background: #ddb347;
}

`