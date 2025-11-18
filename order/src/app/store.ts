import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import orderListReducer from '../features/order_list/orderListSlice';
import orderViewReducer from '../features/order_view/orderViewSlice.ts';

export const store = configureStore({
    reducer: {
        orders: orderListReducer,
        order: orderViewReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
