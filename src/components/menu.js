import React from 'react'
import Link from "gatsby-link"

const Menu = () => (
        <div style={{
            background: '#fff',
            paddingTop: '10px'
        }}>

        <ul style={{
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-evenly'
        }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/medical">Medical</Link></li>
            <li><Link to="/shelter">Shelter</Link></li>
            <li><Link to="/food">Food</Link></li>
            <li><Link to="/safety">Safety</Link></li>
            <li><Link to="/financial">Financial</Link></li>
            <li><Link to="/legal">Legal</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
           
        </div>
    )

export default Menu;
