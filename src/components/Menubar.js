import React from 'react'
import './Menubar.css'

function Menubar() {
    return (
        <div className='menuOptions'>
            <a className='options' href="/Home">Home</a>
            <span className='options'>Best Seller</span>
            <span className='options'>New Release</span>
            <span className='options'>Today's Deal</span>
            <span className='options'>Pharmacy </span>
            <span className='options'>Fashion</span>
            <span className='options'>Toys&Games</span>
            <span className='options'>E-Books</span>
            <span className='options'>Gift Cards</span>
            <span className='options'>Computers</span>
            <span className='options'>Automotive</span>
            <span className='options'>Coupons</span>
        </div>
    )
}

export default Menubar
