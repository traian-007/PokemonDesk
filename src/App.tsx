import React from 'react';
import { useRoutes } from 'hookrouter';
import NotFound from './pages/NotFound';
import routers from './routers';
import Header from './components/Header';

const App = () => {
  const match = useRoutes(routers);
  return match ? (
    <>
      <Header />
      {match}
    </>
  ) : (
    <NotFound />
  );
};

export default App;
