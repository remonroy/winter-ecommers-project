import React, { useState } from 'react';
import './Navbar.css'
import {Link} from "react-router-dom";
import logo from '../../img/headerLogo.png';

const Navbar = () => {
    const[toogle,setToogle]=useState(false)
    const [scroll,setScroll]=useState(false)

    const changeBackground=()=>{
        if(window.scrollY >=267){
            setScroll(true)
        }else{
            setScroll(false)
        };
    }

    window.addEventListener('scroll',changeBackground)

    return (
        <nav className={scroll ?'navbarTrans  fixed-top':'navbar fixed-top'}> 
            <Link to='/'><img style={{width:"150px"}} src={logo} alt=""/></Link>
            <ul className={toogle ? "mobileToogle animate__animated animate__fadeInUp":"navLinks"}>
                <li><Link to='/home' className='home'>Home</Link></li>
                <li><Link to='/about' className='about'>About</Link></li>
                <li><Link to='' className='skill'>Skill</Link></li>
                <li><Link to='' className='contact'>Contact</Link></li>
                <li><Link to='' className='signup'>Sign up</Link></li>
            </ul>
            <button
                className="toogleIcon animate__animated animate__bounce"
                onClick={()=>setToogle(!toogle)}
            >
                {
                    toogle ? <i className="fas fa-times"></i> :<i className="fas fa-bars"></i>
                }
            </button>
        </nav>
    );
};

export default Navbar;