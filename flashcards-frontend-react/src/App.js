import "./App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import StudyPage from "./pages/StudyPage";
import EditDeckPage from "./pages/EditDeckPage";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/study/:deckId" element={<StudyPage />} />
                    <Route path="/editDeck/:deckId" element={<EditDeckPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;