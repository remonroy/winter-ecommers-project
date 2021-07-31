import React from 'react';
import './CustoMar.css';
import { Swiper, SwiperSlide, } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {
    EffectCoverflow,Pagination
} from 'swiper/core';
import customar1 from '../../../../img/customar1.jpg'
import customar2 from '../../../../img/customar2.jpg'
import customar3 from '../../../../img/customar3.jpg'
import customar4 from '../../../../img/customar4.jpg'
import customar5 from '../../../../img/customar5.jpg'
import customar6 from '../../../../img/moni.jpg'
import customar7 from '../../../../img/rogdhong.jpg'
import customar8 from '../../../../img/customar8.jpg'
import customar9 from '../../../../img/customar9.jpg'
SwiperCore.use([EffectCoverflow,Pagination]);

const CustoMar = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className=" text-center fashion">
                    <h3>Fashion <span>Design</span> </h3>
                </div>
            <div className="col- col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-5 mb-5">
            
                <div className="Customar">
                
                    <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
                    "rotate": 50,
                    "stretch": 0,
                    "depth": 100,
                    "modifier": 1,
                    "slideShadows": true
                    }} pagination={true} className="mySwiper">
                    <SwiperSlide><img  src={customar8} /></SwiperSlide>
                    <SwiperSlide><img  src={customar2} /></SwiperSlide>
                    <SwiperSlide><img  src={customar3} /></SwiperSlide>
                    <SwiperSlide><img  src={customar4} /></SwiperSlide>
                    <SwiperSlide><img  src={customar5} /></SwiperSlide>
                    <SwiperSlide><img  src={customar6} /></SwiperSlide>
                    <SwiperSlide><img  src={customar7} /></SwiperSlide>
                    <SwiperSlide><img  src={customar1} /></SwiperSlide>
                    <SwiperSlide><img style={{height:'350px'}} src={customar9} /></SwiperSlide>
                    </Swiper>
                    
                </div>
                
            </div>
            </div>
        </div>
    );
};

export default CustoMar;