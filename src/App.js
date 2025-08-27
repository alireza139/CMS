import { useRoutes } from 'react-router-dom';
import React from 'react';
import './App.css';
import routes from './routes';
import Header from './components/header/Header'

function App() {
  let router = useRoutes(routes)
  return (
    <>
      <Header></Header>
      {router}
    </>
  );
}

export default App;
