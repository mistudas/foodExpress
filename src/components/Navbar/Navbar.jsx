import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import './Navbar.css'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState('home')

    const {getTotaltCartAmount}= useContext(StoreContext)

  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo1} alt="" className="logo" /></Link>
        <ul className="navbar-menu">
            <Link to='/'  onClick={()=>setMenu('home')} className={menu==='home'?'active':""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu('menu')} className={menu==='menu'?'active':""}>Menu</a>
            <a href='#app-download' onClick={()=>setMenu('mobile-app')} className={menu==='mobile-app'?'active':""}>Mobile-App</a>
            <a href='#footer' onClick={()=>setMenu('contact us')} className={menu==='contact us'?'active':""}>Contact Us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <Link to={'/cart'}><img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotaltCartAmount()?'dot':''}></div>
            </div>
            <button onClick={()=>{setShowLogin(true)}}>Sign-in</button>
        </div>
    </div>

  )
}

export default Navbar