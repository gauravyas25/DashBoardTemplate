import React from "react";
import "./sidebar.css";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () =>{
    return(
        <div className="sidebar">
            <div className="top">
                <span className="logo"> DashBoard </span>
            </div>
            <hr />

            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li><DashboardIcon className="icon"/><span>Dashboard</span></li>

                    <p className="title">LISTS</p>
                    <li><PersonOutlinedIcon className="icon"/><span>Users</span></li>
                    <li><InventoryIcon className="icon"/><span>Products</span></li>
                    <li><ShoppingCartIcon className="icon"/><span>Orders</span></li>
                    <li><LocalShippingIcon className="icon"/><span>Delivery</span></li>

                    <p className="title">USER</p>
                    <li><AccountCircleIcon className="icon"/><span>Profile</span></li>
                    <li><LogoutIcon className="icon"/><span>Logout</span></li>
                    <li><SettingsIcon className="icon"/><span>Settings</span></li>

                </ul>
            </div>

        </div>
    )
}

export default Sidebar;