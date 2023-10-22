import { configureStore, createSlice } from '@reduxjs/toolkit';



const emailSlice = createSlice({
    name: "emailMessages",
    initialState: {
        emails: [],
    },
    reducer: {
        setMessages: (state, action) => {
            state.emails = ["lulla"];
        }
    }
})



const store = configureStore({
    reducer: {
        emailSlice: emailSlice.reducer
    },
})


export const { setMessages } = emailSlice.actions;


export default store;