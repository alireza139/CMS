import { useRoutes } from 'react-router-dom';
import React from 'react';
import './App.css';
import routes from './routes';
import Header from './components/header/Header'
import SideBar from './components/sideBar/SideBar'

function App() {
  let router = useRoutes(routes)
  return (
    <>
      <Header></Header>
      <div className='d-flex'>
        <SideBar></SideBar>
        {router}
      </div>
    </>
  );
}

export default App;
