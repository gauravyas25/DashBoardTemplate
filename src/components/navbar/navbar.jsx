import React from "react";
import "./navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';

const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    
                    <input type="text" placeholder="Search"/><SearchIcon/>
                </div>

                <div className="items">
                    <div className="item">
                        <LanguageIcon className="icon"/> 
                    </div>

                    <div className="item">
                        <DarkModeOutlinedIcon className="icon"/> 
                    </div>

                    <div className="item">
                        <FullscreenOutlinedIcon className="icon"/> 
                    </div>

                    <div className="item">
                        <NotificationsOutlinedIcon className="icon"/> 
                    </div>

                    <div className="item">
                        <TextsmsOutlinedIcon className="icon"/> 
                    </div>

                    <div className="item">
                        <MenuOutlinedIcon className="icon"/> 
                    </div>
                    
                    <div className="item">
                        <img src="/Coatimg.jpg" alt="" className="avatar"/> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;