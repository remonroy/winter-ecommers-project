import React from 'react';
import './Homemain.css'
import hdaerImg from '../../../img/mainLogo.png'
const Homemain = () => {
    return (
        <div className='background'>
            
            <div className="container">
                <div className="row">
                    <div className="col- col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <div className="headerImg">
                           <img src={hdaerImg} alt=""/>
                        </div>
                    </div>
                    <div className="col- col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="homeDescription">
                            <span>60% discount</span>
                            <h1>Winter <br/> Collection</h1>
                            <p>Best Cloth Collection By 2021..!</p>
                            <button>Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homemain;