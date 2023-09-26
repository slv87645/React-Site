
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState} from 'react';

import Nav from './components/Nav';
import products from './data/products.js';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import StaffPage from './pages/StaffPage';
import OrderPage from './pages/OrderPage';
import LogPage from  './pages/LogPage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';
import TopicPage from './pages/TopicPage';

import './App.css';

function App() {
  const [collectableToEdit, setCollectableToEdit] = useState([])
  return (
    <div className="App">
      <BrowserRouter>

        <header className="App-header">
          <h1> Steven Vu
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
          </h1>
        </header>

        <Nav />

        <main>
          <section className="App-article">
            <Routes>
                <Route path="/"        element={<HomePage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/staff"   element={<StaffPage />} />
                <Route path="/order"   element={<OrderPage products = {products}/>} />
                <Route path="/log"     element={<LogPage setCollectableToEdit = {setCollectableToEdit}/>} />
                <Route path="/create"  element={<CreatePage/>} />
                <Route path="/replace"  element={<EditPage collectableToEdit = {collectableToEdit}/>} />
                <Route path="/topics" element={<TopicPage />} />
            </Routes>
          </section>
        </main>
        
        <footer>
          <p><cite>&copy; Steven Vu 2023</cite></p>
        </footer>
        
        </BrowserRouter>
      </div>
    );
  }

export default App;
