import { Provider as OrderProvider } from 'react-redux';
import {store as orderStore} from './app/store.ts';
import {OrderList} from "./features/order_list/OrderList.tsx";
import {OrderView} from "./features/order_view/OrderView.tsx";
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
        <OrderProvider store={orderStore}>
                <Routes>
                    <Route index element={<Navigate to="list" replace />} />
                    <Route path="list" element={<OrderList/>}/>
                    <Route path=":id" element={<OrderView/>}/>
                </Routes>
        </OrderProvider>
  );
};

export default App;
