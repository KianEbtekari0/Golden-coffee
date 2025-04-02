import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import Footer from "./components/Footer/Footer";
import MainProduct from './components/MainProduct/MainProduct';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product/:id" element={<MainProduct />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
