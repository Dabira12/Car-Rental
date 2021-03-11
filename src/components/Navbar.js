import React from 'react'
import {Link,NavLink} from 'react-router-dom'

const Navbar= () =>{
    return(
        <nav className="nav-wrapper blue-grey darken-3">
            <div className="container">
                <a className="brand-logo"> Premium Whips</a>
                <ul className="right">
                    <li><Link to ="/">About Us</Link></li>
                    <li><Link to ="/rental">Rental</Link></li>
                    <li><Link to="/faq">Faq</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;