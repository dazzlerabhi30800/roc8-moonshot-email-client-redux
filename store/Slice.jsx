import { configureStore, createSlice } from '@reduxjs/toolkit';



const emailSlice = createSlice({
    name: "emailMessages",
    initialState: {
        emailMessages: [],
    },
    reducers: {
        setEmailMessages: (state, action) => {
            state.emailMessages = action.payload;
        }
    }
})



const store = configureStore({
    reducer: {
        emailSlice: emailSlice.reducer,
    },
})


export const { setEmailMessages } = emailSlice.actions;


export default store;