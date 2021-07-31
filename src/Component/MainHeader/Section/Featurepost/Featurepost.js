import React, { useState } from 'react';
import img from '../../../../img/card1.jpg';
import img2 from '../../../../img/card2.jpg';
import img3 from '../../../../img/card3.jpg';
import './Featurepost.css'
const Featurepost = () => {
    const item=[
        
        {
            title:'Owmen`s',
            img:img2,
            description:'New Collection'
        },
        {
            title:'Owmen`s',
            img:img,
            description:'New Collection'
        },
        {
            title:'Man`S Cloth',
            img:img3,
            description:'New Collection'
        },
        {
            title:'Owmen`s',
            img:img,
            description:'New Collection'
        },
        {
            title:'Man`S Cloth',
            img:img3,
            description:'New Collection'
        },
          
    ]
    const [paginate,setPaginate]=useState(3)
    const handleClick=()=>{
        setPaginate((prevalue)=>prevalue + 3)
    }
    return (
        <div className="container">
            <div className="row ">
                <h1 style={{fontFamily:'Work Sans, sans-serif',fontWeight:'bold'}} className="text-center mt-5 mb-4">Shop by Category</h1>
                {item.slice(0,paginate).map((item) =>(<div className="col- col-sm-6 col-md-4 col-lg-4 col-xl-4 mt-4 text-center">
                    <div className="itemCard">
                        <img src={item.img} alt=""/>
                        <div className="descrip">
                            <h4 className='mt-1'>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>))}  
                
                <div className="btn mt-4">
                    <button onClick={handleClick}>Show more</button> 
                </div>
            </div>
        </div>
    );
};

export default Featurepost;