import { useRoutes } from 'react-router-dom';
import React from 'react';
import './App.css';
import routes from './routes';
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import Header from './components/header/Header'
import SideBar from './components/sideBar/SideBar'

function App() {
  let router = useRoutes(routes)
  return (
    <>
      <Header></Header>
      <div className='d-flex'>
        <div className="left-side col-4 col-md-2">
          <SideBar></SideBar>
        </div>

        <div className='right-side col-8 col-md-10'>
          {router}
        </div>
      </div>
    </>
  );
}

export default App;
