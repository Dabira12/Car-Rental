import React, { Component } from 'react'
import Calendar from './Calendar'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../App.css'


class carInfo extends Component{
    state = {
        cars:[
            {name:"Mercedes AMG G63", src:"/images/rent-amg-g63.jpg",img1:"/images/AMG-1.jpg",price:"$1450/day",id:1},
            {name:"Lamborghini Aventador",src:"/images/rent-aventador.jpg",img1:"/images/aventador.jpg",price:"$700/day",id:2},
            {name:"Porsche Cayman", src:"/images/rent-cayman.jpg",img1:"/images/cayman.jpg",price:"$1000/day",id:3},
            {name:"Lamborghini Urus", src:"/images/rent-urus.jpg",img1:"/images/urus.jpg",price:"$1400/day",id:4},
            {name:"Lamborghini Hurucan",src:"/images/rent-hurucan.jpg",img1:"/images/hurucan.jpg",price:"$700/day",id:5},
            {name:"Ferrari 488",src:"/images/rent-ferrari-488.jpg",img1:"/images/ferrari.jpg",price:"$600/day",id:6},
            {name:"Bentley Bentayga",src:"/images/rent-bentayga.jpg",img1:"/images/bentayga.jpg",price:"$900/day",id:7},
            {name:"Mclaren 570 S",src:"/images/rent-mclaren.jpg",img1:"/images/mclaren.jpg",price:"$1000/day",id:8},
            {name:"Lamborghini Hurucan-White",src:"/images/rent-hurucan-white.jpg",img1:"/images/hurucan-white.jpg",price:"$900/day",id:9},
        ],
        car:'ff'
    }
    componentDidMount(){
        const M = window.M;
        var today = new Date();
        console.log(today);
       
        
        let id = this.props.match.params.car_id;
        let car = this.getcar(this.state.cars,id);
        console.log(car);
        // this.setState({ car: car }),
        // () => console.log(this.state)); 
        // console.log(this.state.car);
        // this.setState((car =>{
        //     return{
        //       car
        //     }
        //   }),()
        this.updateState(car);
        // document.addEventListener('DOMContentLoaded', function() {
        //     var elemsD = document.querySelectorAll('.datepicker');
        //     M.Datepicker.init(elemsD, {minDate: today});
        //     var elems = document.querySelectorAll('.tooltipped');
        //     M.Tooltip.init(elems, {});
            
        //   });
        M.AutoInit();

       
        
    }


   
   
    updateState = (car) => {
         this.setState({
           car: car
         },() => { console.log('new state', this.state.car); })
       }
    render(){
       

        // let name = this.state.car.name
        return(
            <div className="container"> 
                <div className="center blue-text text-darken-4 ">
                    <h3>Rent a {this.state.car.name}</h3>
                </div>
                 
                
                   
                    <div className="center">
                        <div className="display"> 
                            <img width="80%" src={this.state.car.img1} alt=""/>
                        </div>
                   
                    <h5>Now availaible at {this.state.car.price}</h5>
                    <br></br>
                    
                    {/* <form width="40%"> 
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name"/>
                    </form> */}
                            
                     </div>
                       
                      
                        <div className="row">
                            <form className="col l12" autoComplete="off">

                                <div className="row">
                                    <div className="tooltipped input-field col l12" data-tooltip="Enter characters only" data-position="bottom">
                                       <i className="material-icons prefix">account_circle</i>
                                        <input  id="first_name" type="text" class="validate"/>
                                        <label className="active" htmlFor="first_name">Name</label>
                                    
                                    </div>
                                    <div className="tooltipped input-field col l12" data-tooltip="Email address should follow format: user@emailprovider.com" data-positon="bottom"> 
                                        <i className="material-icons prefix">email</i>
                                        <input id="email" type="email" class="validate"/>
                                        <label className="active" htmlFor="email">Email</label>
                                        <span class="helper-text" data-error="" data-success=""></span>
                                    
                                    </div>
                                    <div className="tooltipped input-field col l12" data-tooltip="Enter digits only" data-postion="bottom">
                                        <i className="material-icons prefix">local_phone</i>
                                        <input  id="number" type="number" className="validate"/>
                                        <label className="active" htmlFor="number">Number</label>

                                    
                                    </div>
                                    <div className="row">
                                        <div className="input-field col l6">
                                            <i className="material-icons prefix">event</i>
                                            <input id="pickup-date "type="text" className="datepicker"/>
                                            <label htmlFor="pickup-date">Pickup Date</label>
                                        
                                        </div>

                                        <div className="input-field col l6">
                                            <i className="material-icons prefix">event</i>
                                            <input id="return-date "type="text" className="datepicker" ref=""/>
                                            <label className="active" htmlFor="return-date">Return Date</label>
                                        
                                        </div>
                                    </div>

                                   
                                    
                                   

                                </div>
                                <div className="center">
                                    <a href="/confirmation"className="waves-effect waves-light btn-large" >BOOK NOW</a>
                                   
                                    </div>



                            </form>



                            {/* <div className="col l4">
                                <h7> Select availaible dates </h7>
                                <br/>
                                <Calendar className="calendar" showNavigation />

                            </div> */}



                            
                        </div>

                        
                
               

            </div>
        );
    }

    getcar(cars,id){
        for (var i = 0; i < cars.length; i++) {
            if(cars[i].name==id){
                return(cars[i]);
            }
        }
    }
    
}
export default carInfo;