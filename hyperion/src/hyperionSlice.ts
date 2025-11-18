import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export enum HyperionStateStatus {
    Idle,
    Loading,
    Failed,
}

export interface HyperionState {
    status: HyperionStateStatus;
    user: {};
}

const initialState: HyperionState = {
    status: HyperionStateStatus.Idle,
    user: { name: 'John Doe' },
};

export const hyperionSlice = createSlice({
    name: 'hyperion',
    initialState: () =>
        ({
            ...initialState,
        }) as HyperionState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadAsync.pending, (state) => {
                state.status = HyperionStateStatus.Loading;
            })
            .addCase(loadAsync.fulfilled, (state) => {
                state.status = HyperionStateStatus.Idle;
            })
            .addCase(loadAsync.rejected, (state) => {
                state.status = HyperionStateStatus.Failed;
            });
    },
});

export const loadAsync = createAsyncThunk(
    'hyperion/load',
    async () => {
        console.log('hyperion load async action called');
        return [];}
);

export default hyperionSlice.reducer;
