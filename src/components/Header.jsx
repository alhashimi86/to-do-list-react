import React  from 'react'
import './Header.css'
const Header = props=> {
        return (
            <div className='header'>
                <h1>What to do?</h1>
               <div>{props.tagline}</div>
            </div>
        )
    }
export default Header;

