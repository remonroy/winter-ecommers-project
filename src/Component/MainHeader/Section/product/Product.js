import React, { useState } from 'react';
import './Product.css'
import new1 from '../../../../img/new1.jpg'
import new2 from '../../../../img/new2.jpg'
import new3 from '../../../../img/new3.jpg'
import new4 from '../../../../img/new4.jpg'
import Featured1 from '../../../../img/Featured1.jpg'
import Featured2 from '../../../../img/Featured2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faSta } from '@fortawesome/free-solid-svg-icons'
const Product = () => {
    const [tab,setTab]=useState(1)
    const handleClick=(index)=>{
        setTab(index)
        console.log(index);
    }
    const newCard=[
        {
            img:new1,
            title:'Green Dress with details',
            price:'40.00'
        },
        {
            img:new2,
            title:'Green Dress with details',
            price:'40.00'
        },
        {
            img:new3,
            title:'Green Dress with details',
            price:'40.00'
        },
        {
            img:new4,
            title:'Green Dress with details',
            price:'40.00'
        },
    ]
    const FeaturedCard=[
        {
            img:Featured1,
            title:'Green Dress with details',
            price:'40.00'
        },
        {
            img:new2,
            title:'Green Dress with details',
            price:'40.00'
        },
        {
            img:Featured2,
            title:'Green Dress with details',
            price:'40.00'
        },
        {
            img:new4,
            title:'Green Dress with details',
            price:'40.00'
        },
    ]
    const offerCard=[
        {
            img:Featured1,
            title:'Green Dress with details',
            price:'40.00'
        },
        {
            img:new2,
            title:'Green Dress with details',
            price:'40.00'
        },
        {
            img:Featured2,
            title:'Green Dress with details',
            price:'40.00'
        },
        
    ]
    return (
        <div className='container'>
            <div className="row">
                <div className="box mt-5 mb-5">
                    
                    <div className="tabs">
                        <div className="title">Latest Products</div>
                        <div className="itmes">
                            <div className={tab === 1 ?"active-tab":"tab"}
                                onClick={()=>handleClick(1)}
                            >New</div>
                            <div className={tab === 2 ?"active-tab":"tab"}
                                onClick={()=>handleClick(2)}
                            >Featured</div>
                            <div className={tab === 3 ?"active-tab":"tab"}
                                onClick={()=>handleClick(3)}
                            >Offer</div>
                        </div>
                    </div>
                    <div className="contents">
                        <div className="row">
                            {newCard.map((card)=><div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-4">
                                <div className={tab === 1 ?"active-content":"content"}>
                                    <div className="newCard">
                                        <img src={card.img} alt=""/>
                                        <div className="rating">
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <i class="far fa-star"></i>
                                        </div>
                                        <h5>{card.title}</h5>
                                        <span>${card.price}</span> <del className='secondSpan'>$60.00</del>
                                    </div>
                                </div>
                                
                            </div>)}
                        </div>
                        <div className="row">
                            {FeaturedCard.map((card)=><div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-4">
                                <div className={tab === 2 ?"active-content":"content"}>
                                    <div className="newCard">
                                        <img src={card.img} alt=""/>
                                        <div className="rating">
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <i class="far fa-star"></i>
                                        </div>
                                        <h5>{card.title}</h5>
                                        <span>${card.price}</span> <del className='secondSpan'>$60.00</del>
                                    </div>
                                </div>
                                
                            </div>)}
                        </div>
                        <div className="row">
                        {offerCard.map((card)=><div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-4">
                                <div className={tab === 3 ?"active-content":"content"}>
                                    <div className="newCard">
                                        <img src={card.img} alt=""/>
                                        <div className="rating">
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <i class="far fa-star"></i>
                                        </div>
                                        <h5>{card.title}</h5>
                                        <span>${card.price}</span> <del className='secondSpan'>$60.00</del>
                                    </div>
                                </div>
                                
                            </div>)}
                        </div>
                        
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Product;