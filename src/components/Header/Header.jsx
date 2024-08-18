import React from 'react'
import logo from '../../assets/logo.png'
import '../../styles/header.css'
import { RiShoppingBag4Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";

const nav__links=[
    {
        path:'',
        display:'Home'
    },
    {
        path:'',
        display:'About'
    },
    {
        path:'',
        display:'Browse Menu'
    },
    {
        path:'',
        display:'Track Order'
    },
]

const Header = () => {
  return (
    <header className="header">
        <div className="container">
            <div className="header__wrapper">
                <div className="header__img">
                    <div className="header__logo">
                        <img src={logo} />
                    </div>
                    <h1>Food Bot</h1>
                </div>
                <div className='nav__item-wrap'>
                    {
                        nav__links.map((item,index)=>(
                            <div className="nav__items">
                                <h2>{item.display}</h2>
                            </div>
                        ))
                    }
                </div>
                <div className="cart__registration">
                <RiShoppingBag4Line  size={35} color='white'/>
                <div className="box">
                   <span> <FaRegUser/> </span> Login
                </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header