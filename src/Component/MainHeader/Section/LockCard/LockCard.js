import React from 'react';
import './LockCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxOpen,faUnlock,faSync } from '@fortawesome/free-solid-svg-icons'
const LockCard = () => {
    return (
        <div className='container'>
            <div className="row ">
                <div className="col- col-sm-4 col-md-4 col-lg-4 col-xl-4 mt-5 mb-5">
                   <div className="lockCard">
                       <h4>Free Shipping Method</h4>
                       <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                       
                        <div className="hoverCard">
                            <FontAwesomeIcon icon={faBoxOpen} />
                        </div>
                   </div>
                   
                </div>
                <div className="col- col-sm-4 col-md-4 col-lg-4 col-xl-4 mt-5 mb-5">
                   <div className="lockCard">
                       <h4>Secure Payment System</h4>
                       <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                       <div className="hoverCard">
                            <FontAwesomeIcon icon={faUnlock} />
                        </div>
                   </div>
                </div>
                <div className="col- col-sm-4 col-md-4 col-lg-4 col-xl-4 mt-5 mb-5">
                   <div className="lockCard">
                       <h4>Secure Payment System</h4>
                       <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                       <div className="hoverCard">
                            <FontAwesomeIcon icon={faSync} />
                        </div>
                   </div>
                </div>
                
            </div>
        </div>
    );
};

export default LockCard;