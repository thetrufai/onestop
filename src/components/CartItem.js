import React from 'react'
import styled from 'styled-components'
import { db } from './firebase'

const CartItem = ({ item, id }) => {
    
    const deleteItem = (e) => {
        e.preventDefault()
        db.collection('cartItems').doc(id).delete()
    }


    let options = []
    
    for (let i = 1; i <= Math.max(item.quantity + 1, 5); i++) {
        options.push(<option value={i}> Qty: {i} </option>)
    }


    const changeQuantity = (newQuantity) => {
        db.collection("cartItems").doc(id).update({
            quantity: parseInt(newQuantity)
        })
     
    }

    return (
        <Container>
            <ImageContainer>
                <img src={item.image} />
            </ImageContainer>

            <CartItemInfo>
                
            <CartInfoTop>
            <h2>{item.name}</h2>
            </CartInfoTop>
            
            <CartInfoBottom>
                    <CartItemQuantity>
                        <select
                            value={item.quantity}
                            onChange={(e) => changeQuantity(e.target.value)}
                        >
                            {options}
                        </select>                       
                    </CartItemQuantity>
                    <CartItemDelete
                    onClick={deleteItem}
                    >
                     Delete               
                    </CartItemDelete>

                </CartInfoBottom>
            </CartItemInfo>

            <ProductPrice>${item.price}</ProductPrice>

        </Container>
    )
}

export default CartItem

const Container = styled.div`
padding-top: 12px;
padding-bottom: 12px;
display: flex;
border-bottom: 1px solid #DDD;
`

const ImageContainer = styled.div`
width: 180px;
height: 180px;
flex-shrink: 0;
flex-grow: 0;
margin-right: 16px;

img{
    object-fit: contain;
    height:100%;
    width:100%;
}

`

const CartItemInfo = styled.div`
flex-grow:1;
`

const CartInfoTop = styled.div`
color: #007185;
h2 {
    font-size: 18px;
}
`

const CartInfoBottom = styled.div`
display:flex;
margin-top: 4px;
align-items: center;
`

const CartItemQuantity = styled.div`
select {
    border-radius: 7px;
    background-color: #f0c14b;
    padding; 10px;
    :focus {
        outline: none;
    }
}

`

const CartItemDelete = styled.button`
background-color: #f0c14b;
margin-left: 30px;
cursor: pointer;
padding: 2px 6px;
border: 2px solid #gray;
border-radius: 4px;
:hover {
    background: #ddb347;
}
`

const ProductPrice = styled.div`
font-size: 18px;
font-weight: 700;
margin-left: 25px;

`