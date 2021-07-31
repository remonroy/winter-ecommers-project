import React from 'react';
import Homemain from '../Homemain/Homemain';
import CustoMar from '../Section/CustoMar/CustoMar';
import Featurepost from '../Section/Featurepost/Featurepost';
import Findproduct from '../Section/Findproduct/Findproduct';
import Footer from '../Section/Footer/Footer';
import Letestnews from '../Section/Letestnews/Letestnews';
import LockCard from '../Section/LockCard/LockCard';
import Ournews from '../Section/Ournews/Ournews';
import Product from '../Section/product/Product';
import './Home.css'
const Home = () => {
    return (
        <div>
            <Homemain></Homemain>
            <Featurepost></Featurepost>
            <Product></Product>
            <Findproduct></Findproduct>
            <Letestnews></Letestnews>
            <Ournews></Ournews>
            <LockCard></LockCard>
            <CustoMar></CustoMar>
            <Footer></Footer>
        </div>
    );
};

export default Home;