import React, { useState } from "react";
import Form from "./components/Form";
import Sidebar from "./components/Sidebar";
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {

  return (
    <div>
      <Header/>
      <Sidebar />
      <div className="form-app">
        <Form />
      </div>
      <Footer />
    </div>);
}

export default App;
