import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export enum OrderListStateStatus {
    Idle,
    Loading,
    Failed,
}

export interface OrderListState {
    status: OrderListStateStatus;
    orders: [];
}

const initialState: OrderListState = {
    status: OrderListStateStatus.Idle,
    orders: [],
};

export const orderListSlice = createSlice({
    name: 'orderList',
    initialState: () =>
        ({
            ...initialState,
        }) as OrderListState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadAsync.pending, (state) => {
                state.status = OrderListStateStatus.Loading;
            })
            .addCase(loadAsync.fulfilled, (state) => {
                state.status = OrderListStateStatus.Idle;
            })
            .addCase(loadAsync.rejected, (state) => {
                state.status = OrderListStateStatus.Failed;
            });
    },
});

export const loadAsync = createAsyncThunk(
    'orderList/load',
    async () => {
        return [];}
);

export default orderListSlice.reducer;
