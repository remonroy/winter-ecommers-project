import React from 'react';
import './Footer.css';
import {Link} from "react-router-dom";
import { FaGithub,FaLinkedin,FaFacebook,FaInstagram } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='footerBg mt-5'>
           <div className="container">
                <div className="row mt-5">
                    <div className="col- col-sm-3 col-md-3 col-lg-3 col-xl-3">
                    <div className="footerLink">
                            <h4>CATEGORIES</h4>
                            <ul>
                                <li><Link to='/home'>Women</Link></li>
                                <li><Link to='/home'>Men</Link></li>
                                <li><Link to='/home'>Shoes</Link></li>
                                <li><Link to='/home'>Man`S Cloth</Link></li>
                            </ul>
                    </div>
                    </div> 
                    <div className="col- col-sm-3 col-md-3 col-lg-3 col-xl-3">
                    <div className="footerLink">
                            <h4>HELP</h4>
                            <ul>
                                <li><Link to='/home'>Track Order</Link></li>
                                <li><Link to='/home'>Returns</Link></li>
                                <li><Link to='/home'>Shipping</Link></li>
                                <li><Link to='/home'>FAQs</Link></li>
                            </ul>
                    </div>
                    </div> 
                    <div className="col- col-sm-3 col-md-3 col-lg-3 col-xl-3">
                    <div className="footerLocation">
                            <h4>CATEGORIES</h4>
                            <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+88) 01798968134</p>
                            <ul>
                                <li><Link to='/home'><FaGithub /></Link></li>
                                <li><Link to='/home'><FaLinkedin /></Link></li>
                                <li><Link to='/home'><FaFacebook /></Link></li>
                                <li><Link to='/home'><FaInstagram /></Link></li>
                            </ul>
                    </div>
                    </div> 
                    <div className="col- col-sm-3 col-md-3 col-lg-3 col-xl-3">
                    <div className="footerGmail">
                        <h4>NEWSLETTER</h4>
                        <p>remonroy34@gmail.com</p>
                    </div>
                    </div> 
                </div>
           </div>
        </div>
    );
};

export default Footer;