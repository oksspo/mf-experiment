import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {AppNavigation} from "./components/AppNavigation.tsx";

const OrderPage = React.lazy(() => import('order/App'));

const basename =
    process.env.PUBLIC_URL // if you inject this via Rsbuild
        ? new URL(process.env.PUBLIC_URL).pathname.replace(/\/$/, '')
        : '/mf-experiment';

const App = () => {
  return (
      <BrowserRouter basename={basename}>
        <AppNavigation/>
        <Routes>
            <Route path="/order/*" element={<OrderPage />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
