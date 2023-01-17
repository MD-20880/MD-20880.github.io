import React from 'react';
import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Innocent from './pages/Innocent';
import Kagerou_Meari from './pages/Kagerou_Meari';


class App extends React.Component{
  render() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Innocent" element={<Innocent />} />
          <Route path="/Kagerou_Meari" element={<Kagerou_Meari />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  }

}

export default App;