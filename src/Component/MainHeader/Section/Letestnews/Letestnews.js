import React from 'react';
import './Letestnews.css'
import letestMan from '../../../../img/styleMan.jpg'

const Letestnews = () => {
    return (
        <div className="letesNews mt-5 mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        
                        <div className="letestLfeft">
                            <h1>Best Collection <br/> of This Month</h1>
                            <p>Designers who are interesten crea.</p>
                            <button>Shop Now</button>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div className="letestRight">
                            <img src={letestMan} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Letestnews;