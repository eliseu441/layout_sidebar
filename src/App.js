import React from 'react';
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layout/header/Header';
import Home from './pages/Home/Home';
import EditEquipamento from './pages/editEquipamento/edicaoEquipamento';
import Circuito from './pages/pesquisarCircuito/circuito';
import Main from './pages/editSite/edicao'
import SideNavBar from './layout/sidebar/SideNavBar';
import { ToastProvider } from "react-toast-notifications";
function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Header />
        <SideNavBar />
        <Routes>
          
        <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
}



export default App;
