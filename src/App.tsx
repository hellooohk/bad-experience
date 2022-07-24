import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Share } from "./components/Share";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/share" element={<Share/>}/>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
