import React from 'react';
import './Findproduct.css';
import sectionMan from '../../../../img/sectionMan.jpg'
const Findproduct = () => {
    return (
        <div className="sectionBg mt-5 mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                        <div className="sectionLeft">
                            <img src={sectionMan} alt=""/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-8 col-xl-8">
                        <div className="sectionRight">
                            <h1>Find The Best Product <br/> from Our Shop</h1>
                            <p>Designers who are interesten creating state ofthe.</p>
                            <button>Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Findproduct;