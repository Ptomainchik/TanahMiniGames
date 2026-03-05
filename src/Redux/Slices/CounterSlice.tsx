import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    value: 0,
    history: [],
    status: "idle",
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
            state.history.push(`+1 -> ${state.value}`);
        },

        decrement: (state) => {
            state.value -= 1;
            state.history.push(`-1 -> ${state.value}`);
        },

        incrementByAmount: (state, action) => {
            state.value += action.payload;
            state.history.push(`+${action.payload} -> ${state.value}`);
        },

        reset: (state) => {
            state.value = 0; 
            state.history.push(`reset -> 0`);
        },

        setStatus: (state, action) => {
            state.status = action.payload;
        },
    },
});

export const {
    increment,
    decrement,
    incrementByAmount,
    reset,
    setStatus
} = counterSlice.actions;

export default counterSlice.reducer;