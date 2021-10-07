import React from 'react'
import styled from 'styled-components'
import logo from './images/logo.jpg'
import {Link} from "react-router-dom"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';


function Header({cartItems, user, signOut}) {

    const getCount = () => {
        let count = 0;
        cartItems.forEach((item) => {
            count += item.product.quantity;
        })

        return count;
    }

    return (
        <Container>

            <Link to='/'>
            <HeaderLogo>
              <img src={logo}></img>                
            </HeaderLogo>
            </Link>

            
            <HeaderOptionAddress>

                <Link to='/'>
                <OnLocation>
                <LocationOnIcon />
                </OnLocation>
                </Link>

                <HeaderOption>
                <OptionLineOne>Hello,</OptionLineOne>
                <OptionLineTwo>Select Your Address</OptionLineTwo>
                </HeaderOption>
                
            </HeaderOptionAddress>

            
            <HeaderSearch>
                <HeaderSearchInput type='text' />

                <HeaderSearchIcon>
                    <SearchIcon />
                </HeaderSearchIcon>

            </HeaderSearch>


            <HeaderNavItems>

                <HeaderOption onClick={signOut}>                
                <OptionLineOne>Hello, {user.name} </OptionLineOne>
                <OptionLineTwo>Sign Out</OptionLineTwo>                     
                </HeaderOption>                          

            
                <HeaderOption>
                <OptionLineOne>Returns</OptionLineOne>
                <OptionLineTwo>& Orders</OptionLineTwo>
                </HeaderOption>         

                                        
                <HeaderOptionCart>
                    <Link to='/cart'>
                    <ShoppingBasketIcon />
                        <CartCount>{getCount()}</CartCount>
                    </Link>
                </HeaderOptionCart>
                
               
            </HeaderNavItems>
            

        </Container>
    )
}

export default Header

const Container = styled.div`
position: sticky;
top: 0;
z-index: 100;
height: 80px;
background-color:#0f1111;
display:flex;
align-items: center;
justify-content: space-between;
color:white;
`

const HeaderLogo = styled.div`
img {
    width:130px;
    margin-left:10px;
}

`
const HeaderOptionAddress = styled.div`
padding-left:9px;
display:flex;
align-items: center;

`

const OptionLineOne = styled.div`

`

const OptionLineTwo = styled.div`
font-weight: 700;

`

const HeaderSearch = styled.div`
display:flex;
flex-grow: 1;
height: 50px;
boarder-radius: 4px;
overflow:hidden;
margin-left:4px;
background-color: white;
:focus-within {
    box-shadow: 0 0 0 3px #F90;
}
`

const HeaderSearchInput = styled.input`
flex-grow: 1;
border: 0;
:focus {
    outline: none;
}
`
const HeaderSearchIcon = styled.div`
background-color: #febd69;
width: 45px;
color: black;
display: flex;
justify-content: center;
align-items: center;

`
const HeaderNavItems = styled.div`
display: flex;



`
const HeaderOption = styled.div`
padding-left: 9px;
padding-right: 9px;
padding-top: 10px;
padding-bttom: 10px;
color: white;
cursor: pointer;
`

const HeaderOptionCart = styled.div`
display: flex;
a {
    display: flex;
    align-items: center;
    padding-right: 9px;
    color: white;
    text-decoration: none;

}
`

const CartCount = styled.div`
padding-left: 4px;
font-weight: 700;
color: #febd69;
`

const OnLocation = styled.div`
color:white;
`