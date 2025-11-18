import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const OrderPage = React.lazy(() => import('order/App'));

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/order/*" element={<OrderPage />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
