import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from './pages/Auth'
import Global from "./styles/Global";

const App = () => {
  return (
    <div className="app">
      <Global />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
