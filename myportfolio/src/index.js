import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects'
import About from './Components/About/About'
import AskUST from './Components/Projects/AskUST/AskUST';
import {createBrowserRouter,RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "projects",
    element: <Projects/>,
  
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path: 'askust',
    element: <AskUST/>

  }
  

 

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

