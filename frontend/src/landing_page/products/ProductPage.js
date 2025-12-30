import React from 'react';
import RightSection from './RightSection';
import LeftSection from './LeftSection';
import Universe from './Universe';
import Hero from './Hero';
import { Link } from 'react-router-dom';

function ProductPage() {
    return ( 
        <>
        <Hero />
        <LeftSection 
        imgURL= "media/images/kite.png"
        productName="Kite"
        productInfo= "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        trydemo="/"
        learnMore="/"
        googlePlay="/"
        appStore="/" 
        />

        <RightSection 
         imgURL="media/images/products-console.png"
         productName="Console"
         productInfo="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
         productLink="/about"
        />

         <LeftSection 
        imgURL= "media/images/coin.png"
        productName="Coin"
        productInfo= "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        trydemo="/"
        learnMore="/"
        googlePlay="/"
        appStore="/"
        
        />

        <RightSection 
         imgURL="media/images/kiteconnect.png"
         productName="Kite Connect API"
         productInfo="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
         productLink="/about"
        />


         <LeftSection 
        imgURL= "media/images/varsity-products.svg"
        productName="Varsity mobile"
        productInfo= "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        trydemo="/"
        learnMore="/"
        googlePlay="/"
        appStore="/"
        
        />
        
        <div className='text-center text-muted fs-5 mt-5 pt-5 pb-5 '>
             <p>Want to know more about our technology stack? Check out the <Link style={{textAlign:'center',textDecoration:'none'}} to={'/'}> Zerodha.tech </Link> blog.</p>
        </div>
        
        <Universe />
        </>
     );
}

export default ProductPage;