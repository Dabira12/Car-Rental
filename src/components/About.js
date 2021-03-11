import React, { Component } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const photos=[
    {
        url:"/images/slider1.jpg"
    },
    {
        url:"/images/slider2.jpg"

    },
    // {
    //     url:"/images/slider3.jpg"
    // }
]
    


class About extends Component{
    render(){
        const settings={
            dots:true,
            speed:1500,
            autoplaySpeed: 3000,
            infinite:true,
            slidesToShow:1,
            slidesToScroll:1,
            arrows:true, 
            autoplay: true,
            className:"slides"
        };
        return(
            <div>
                <Slider{...settings} >
                    {photos.map((photo)=>{
                        return(<div>
                            <img width="100%" height="600" src={photo.url} alt=""/>
                        </div>
                        )
                    })}

                </Slider>
                <div className="container">
                    <br/>
                    <h5 className= "center blue-text text-darken-4 ">A ONE-STOP SHOP FOR AN ULTIMATE LUXURY VEHICLE IN OTTAWA</h5>
                    <div class="divider"></div>
                    <div class="section">
                        <h5>Who we are</h5>
                        <p>We take pride in providing the best exotic car rental service to our customers because we are car enthusiasts ourselves. We cater to the needs of customers from all around the world since 2013. Our team speaks English, French, Arabic, Spanish and Russian.</p>
                    </div>
                    <div class="divider"></div>
                     <div class="section">
                        <h5>What we do</h5>
                        <p>At Premium Whips you can rent luxury vehicles as well as exotic cars, with or without a chauffeur. We also deliver vehicles in nearby cities , at the airport, your residence or directly at a venue in West Hollywood, Beverly Hills, DTLA and the greater Los Angeles.</p>
                    </div>
                    <div class="divider"></div>
                    <div class="section">
                        <h5>Why choose us?</h5>
                        <p>Our services go above and beyond our customer’s expectations. Our mission is to provide a complete luxury lifestyle experience in affordable rates, with the most lenient conditions and the best service in the city of Los Angeles.</p>
                    </div>
                    <div class="divider"></div>
                    <div className="center"> 
                        <br/>
                        <a href='/rental' className="btn-large"> Discover our full range of Luxury Vehicles</a>
                    </div>
                   
                
            
                
                
                </div>
           
            </div>
            
        )
        
        
        
        
        
    }
}

export default About;