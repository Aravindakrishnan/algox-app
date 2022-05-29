import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar/Navbar';
import Container from './components/Container/Container';
import VisualizeComponent from './components/VisualizeComponent/VisualizeComponent';
import { AnimatePresence } from "framer-motion";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar title="Algox"></Navbar>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/:type" element={<Container/>} />
          <Route path="/:type/:innerType" element={<VisualizeComponent/>} ></Route>
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
