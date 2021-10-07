import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Product from './Product'
import { db } from './firebase'


function Home() {

    const [products, setProducts] = useState( [] )

    const getProducts = () => {
        db.collection('products').onSnapshot((snapshot)=>{
            let tempProducts = []

            tempProducts = snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    product: doc.data()
                
                }

            ));
            setProducts(tempProducts);
            
        })

    }

    useEffect(() => {
        console.log("Call Products");

        getProducts()
    }, [])
    console.log(products)



    return (
        <Container>
            
            <Banner>                
            </Banner>

            <Content>
                {
                    products.map((data) => (
                        <Product
                            id={data.id}
                            title={data.product.name}
                            price={data.product.price}
                            rating={data.product.rating}
                            image={data.product.image}
                            
                        />
                    ))
                }
 
            </Content>            
            
        </Container>
    )
}

export default Home

const Container = styled.div`

max-width: 1500px;
margin: 0 auto;
`

const Banner = styled.div`
background-image: url('/banner.jpg');
min-height: 700px;
background-size: 80% ;
mask-image: linear-gradient(to bottom, rgba( 0, 0, 0, 1), rgba( 0, 0, 0, 0));
z-index: 1;

`

const Content = styled.div`
display: flex;
padding-left:10px;
padding-right:10px;
margin-top:-200px;
z-index: 100;

`