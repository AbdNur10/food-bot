import React from 'react'
import logo from '../../assets/logo.png'
import '../../styles/header.css'
import { RiShoppingBag4Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";




const nav__links=[
    {
        path:'/',
        display:'Home'
    },
    {
        path:'/about',
        display:'About'
    },
    {
        path:'/browse',
        display:'Browse Menu'
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
                    
                    {/* <Link >Home</Link> */}
                     {
                        nav__links.map((item,index)=>(
                            <a href={item.path} style={{
                                textDecoration:'none',
                            }}  className="nav__items" key={index}>
                               
                               <h2>{item.display}</h2>
                               
                            </a>
                        ))
                    } 
                </div>
                <a href='/login' className="cart__registration">
                <RiShoppingBag4Line  size={35} color='white'/>
                <div className="box">
                   <span> <FaRegUser/> </span> Login
                </div>
                </a>
            </div>
        </div>
    </header>
  )
}

export default Header