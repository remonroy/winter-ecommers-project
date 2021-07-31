import React from 'react';
import './Ournews.css'

const Ournews = () => {
    return (
        <>
            <div className="container">
                <div className="OurBg mb-5">
                    <div className="row">
                        
                        <div className="col- col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <div className="LetOur">
                                <h1>Get Our <br/> Latest Offers News</h1>
                                <p>Subscribe news latter</p>
                            </div>
                        </div>
                        <div className="col- col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <div className="inputFild">
                                <form action="">
                                    <input type="eamil" name="" placeholder="Enter your eamil"/>
                                    <button>Shop Now</button>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Ournews;