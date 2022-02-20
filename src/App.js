import React from 'react';
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import  List  from './componets/List';
import View from './componets/View/';
import { Header } from './componets/Header';


export default function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="view/:id" element={<View />} />  
    </Routes>
    </div>
  );
}








