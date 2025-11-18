import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export enum OrderViewStateStatus {
    Idle,
    Loading,
    Failed,
}

export interface OrderViewState {
    status: OrderViewStateStatus;
    orders: [];
}

const initialState: OrderViewState = {
    status: OrderViewStateStatus.Idle,
    orders: [],
};

export const orderViewSlice = createSlice({
    name: 'orderView',
    initialState: () =>
        ({
            ...initialState,
        }) as OrderViewState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadAsync.pending, (state) => {
                state.status = OrderViewStateStatus.Loading;
            })
            .addCase(loadAsync.fulfilled, (state) => {
                state.status = OrderViewStateStatus.Idle;
            })
            .addCase(loadAsync.rejected, (state) => {
                state.status = OrderViewStateStatus.Failed;
            });
    },
});

export const loadAsync = createAsyncThunk(
    'orderView/load',
    async () => {
        return [];}
);

export default orderViewSlice.reducer;
