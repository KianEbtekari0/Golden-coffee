import React from 'react';
import { useRoutes } from 'react-router-dom';

import Routes from './Routes';
import './App.css';

function App() {

  const router = useRoutes(Routes);

  return (
    <>
      {router}
    </>
  );
}

export default App;
