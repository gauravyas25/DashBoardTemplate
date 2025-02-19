import React from "react";
import "./Featured.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Featured = () => {
    return(
        <div className="featured">
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVertIcon fontSize="small"/>
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text="70%" strokeWidth={2}/>
                </div>
                <p className="title">Total sales made today</p>
                <p className="amt"><CurrencyRupeeIcon className="icon"/>400</p>
                <p className="desc">Previous Transactions are Processing</p>

                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownIcon fontSize="small"/>
                            <div className="resultAmt"><CurrencyRupeeIcon className="icon"/>1223</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpIcon fontSize="small"/>
                            <div className="resultAmt"><CurrencyRupeeIcon className="icon"/>1223</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpIcon fontSize="small"/>
                            <div className="resultAmt"><CurrencyRupeeIcon className="icon"/>1223</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Featured;