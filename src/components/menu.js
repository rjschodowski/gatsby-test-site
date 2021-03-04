import React from 'react'
import Link from "gatsby-link"

const Menu = () => (
        <div>

        <ul style={{
            listStyle: 'none'
        }}>
            <li><Link to="/food">Food</Link></li>
            <li><Link to="/medical">Medical</Link></li>
            <li><Link to="/shelter">Shelter</Link></li>
            <li><Link to="/safety">Safety</Link></li>
            <li><Link to="/financial">Financial</Link></li>
            <li><Link to="/legal">Legal</Link></li>
        </ul>
           
        </div>
    )

export default Menu;
