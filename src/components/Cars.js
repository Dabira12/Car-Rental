import React from 'react'
import Rental from './Rental'
import {Link} from 'react-router-dom'


const Cars = ({cars}) =>{
    const carlist = cars.map(car =>{
        return(
            <div className= "car" key={car.id}>
                <div className="card small">
                    <div className="card-image">
                        <img src={car.src} alt=""/>    
                    </div>
                    <div className="card-content">
                        <div className="center">
                            <h6>{car.name}</h6>
                        </div>
                        
                         
                       


                        <div class="card-action">
                            
                            <div className="center">
                                <Link to={'/cars/'+car.name}>
                                    <button className="btn-small"> VIEW</button>
                                </Link>
                                
                            </div>
                         </div>
                        

                    </div>

                </div>
            </div>
           
        )
    })
    console.log(carlist);
    return(
        <div className="car-list">
            <div className= "row">
                
                <div className="col m4">
                    {carlist[0]}
                </div> 
                <div className="col m4">
                    {carlist[1]}
                </div> 
                <div className="col m4">
                    {carlist[2]}
                </div> 
                <div className="col m4">   
                    {carlist[3]}
                </div> 
                <div className="col m4">
                    {carlist[4]}
                </div> 
                <div className="col m4">
                    {carlist[5]}
                </div> 
                <div className="col m4">
                    {carlist[6]}
                </div> 
                <div className="col m4">
                    {carlist[7]}
                </div>
                <div className="col m4">                    
                    {carlist[8]}
                </div> 

                


                
            </div>

        </div>
    )
}


export default Cars