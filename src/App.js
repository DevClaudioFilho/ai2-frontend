import React,{useEffect,useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { BrowserRouter as Router, Route, Link, Routes, Navigate } from "react-router-dom";

// Styles
import './styles/global.css';

// Middleware
import { getCurrentUser } from './utils/auth/auth.service.js';

// Views
import Home from './view';
import NotFound from './view/404';
import Layout from './view/Home/layout.js';

import AdminLayout from './view/admin/AdminLayout';
import SystemAdm from './view/admin/Systems/System.js';
import System from './view/Home/systems';
import About from './view/Home/about.js';
import Contact from './view/Home/contact.js';
import Book from './view/admin/Books/Book.js';
import Banner from './view/admin/Banner/Banner.js';
import Blog from './view/blog/index.js';
import Login from './view/Login/index.js';
import Post from './view/blog/post.js';
import PostAdmin from './view/admin/Post/PostAdmin.js';
import Perfil from './view/Home/perfil.js';
import NewUser from './view/Login/newUser.js';

function App() {

  return (
    <>
        <Router>
            <Routes>
            <Route path='*' element={<NotFound />} />
              <Route path='/login' exact element={<Login />} />
              <Route path='/login/new' exact element={<NewUser />} />

              <Route path="/" element={< Layout />}>
                <Route path='*' element={<NotFound />} />
                <Route path='' element={<Home />} />
                <Route path='about' element={<About/>} />
                <Route path='system/:systemId'element={<System />} />
                <Route path='contact' element={<Contact/>} />
                <Route path='blog' element={<Blog/>} />
                <Route path='post/:postId'element={<Post/>} />
                <Route path='perfil'element={getCurrentUser()?<Perfil/>:<Navigate to="/login" replace />} />
              </Route>  

              <Route path="admin" element={<AdminLayout />}>
                <Route path='' element={getCurrentUser()?<SystemAdm/>:<Navigate to="/login" replace /> } /> 
                <Route path='system' element={getCurrentUser()?<SystemAdm/>:<Navigate to="/login" replace />} />
                <Route path='book' element={getCurrentUser() ?<Book/>:<Navigate to="/login" replace /> } />
                <Route path='banner' element={getCurrentUser()?<Banner/>:<Navigate to="/login" replace />} />
                <Route path='post' element={getCurrentUser()?<PostAdmin/>:<Navigate to="/login" replace />} />
                <Route path='*' element={getCurrentUser()?<NotFound />:<Navigate to="/login" replace />} />
              </Route>  
            </Routes>
        </Router>
    </>
  );
}

export default App;
