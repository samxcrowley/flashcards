import "./App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    {/* <Route path="/logout" element={<LogoutPage />} /> */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;