import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import MenuIcon from '@material-ui/icons/Menu'
import { Avatar, Typography } from '@material-ui/core'

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <img src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-Logo.png"/> 
            </div>
            <div className="header__center">
                <div className="header__centerSearchBar">
                <input type="text" placeholder="Start your search"/>
                <div className="header__centerSearchIcon">
                <SearchIcon/>
                </div>
                
                </div>
                
            </div>
            <div className="header__end">
                <h3>Become a host</h3>
                <div className="header_endGlobeIcon">
                <LanguageIcon/>
                </div>
    
                <div className="header__endMenuAvatar">  
                <div className="header__endMenuIcons"><MenuIcon/>
                <Avatar/></div></div>
              
            </div>
        </div>
    )
}

export default Header; 