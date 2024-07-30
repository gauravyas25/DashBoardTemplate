import React from "react";
import Home from "./pages/hometab/HomeTab";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



import {
    BrowserRouter,
    Routes,
    Route,
}from "react-router-dom";


function App() {
    return(
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;