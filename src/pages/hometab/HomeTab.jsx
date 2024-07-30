import React from "react";
import "./HomeTab.css";
import Navbar from "../../components/navbar/navbar.jsx"
import Sidebar from "../../components/sidebar/sidebar.jsx"
import Widget from "../../components/widgets/Widget.jsx";
import Chart from "../../components/charts/Chart.jsx";
import Featured from "../../components/featured/Featured.jsx";
import List from "../../components/tables/Table.jsx";

const Home = () =>{
    return(
        <div className="Home">
             <Sidebar/>
             <div className="homeContainer">
                <Navbar/>
                <div className="widgets">
                    <Widget type="user"/>
                    <Widget type="order"/>
                    <Widget type="earning"/>
                    <Widget type="balance"/>
                </div>

                <div className="charts">
                    <Featured/>
                    <Chart/>
                </div>

                <div className="listContainer">
                    <div className="listTitle">Latest Orders</div>
                    <List/>
                </div>
             </div>
        </div>          
    );
};

export default Home;