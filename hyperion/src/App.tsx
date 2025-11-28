import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {AppNavigation} from "./components/AppNavigation.tsx";

const OrderPage = React.lazy(() => import('order/App'));

const App = () => {
  return (
      <BrowserRouter>
        <AppNavigation/>
        <Routes>
            <Route path="/order/*" element={<OrderPage />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
