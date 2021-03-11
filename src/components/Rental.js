import React, { Component } from 'react'
import Cars from './Cars'

class Rental extends Component{
    state = {
        cars:[
            {name:"Mercedes AMG G63", src:"/images/rent-amg-g63.jpg",id:1},
            {name:"Lamborghini Aventador",src:"/images/rent-aventador.jpg",id:2},
            {name:"Porsche Cayman", src:"images/rent-cayman.jpg",id:3},
            {name:"Lamborghini Urus", src:"images/rent-urus.jpg",id:4},
            {name:"Lamborghini Hurucan",src:"images/rent-hurucan.jpg",id:5},
            {name:"Ferrari 488",src:"images/rent-ferrari-488.jpg",id:6},
            {name:"Bentley Bentayga",src:"images/rent-bentayga.jpg",id:7},
            {name:"Mclaren 570 S",src:"images/rent-mclaren.jpg",id:8},
            {name:"Lamborghini Hurucan-White",src:"images/rent-hurucan-white.jpg",id:9},
        ]
    }
    render(){
        return(
            <div className="container">
                <div className="center  blue-text text-darken-4">
                    <h4>Discover our full range of Luxury Vehicles</h4>
                </div>
                
            
                <Cars cars={this.state.cars} />
            </div>
        )
    }

    displayCar= (car) => {
        console.log(car);
    }
    
}

export default Rental;