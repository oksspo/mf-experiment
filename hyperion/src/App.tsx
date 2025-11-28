import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppNavigation } from './components/AppNavigation.tsx';

const OrderPage = React.lazy(() => import('order/App'));

// Simple: use NODE_ENV to switch basename
const basename =
    process.env.NODE_ENV === 'production' ? '/mf-experiment' : '/';

const App = () => {
    return (
        <BrowserRouter basename={basename}>
            <AppNavigation />

            <React.Suspense fallback={<div>Loading…</div>}>
                <Routes>
                    <Route path="/order/*" element={<OrderPage />} />
                </Routes>
            </React.Suspense>
        </BrowserRouter>
    );
};

export default App;
