import { configureStore, createSlice } from '@reduxjs/toolkit';



const emailSlice = createSlice({
    name: "emailMessages",
    initialState: {
        emailMessages: [],
        readMessages: [],
        favoriteMessages: [],
        readMessage: null,
    },
    reducers: {
        setEmailMessages: (state, action) => {
            state.emailMessages = [...action.payload];
        },
        handleRead: (state, action) => {
            state.emailMessages = state.emailMessages.map((msg) => {
                if (msg.id === action.payload) {
                    return { ...msg, read: true, current: true }
                }
                else {
                    return { ...msg, current: false }
                }
            })
            state.readMessages = state.emailMessages.filter(msg => msg?.read === true);
            if (state.readMessage && state.readMessage.id === action.payload) {
                return;
            }
            state.readMessage = state.emailMessages.find(msg => msg.id === action.payload);
        },
        setReadMessage: (state, action) => {
            state.readMessage = action.payload;
        },
        handleFavorite: (state, action) => {
            state.emailMessages = state.emailMessages.map(msg => {
                if (msg.id === action.payload) {
                    return { ...msg, favorite: msg.favorite ? false : true }
                }
                return msg
            })
            state.favoriteMessages = state.emailMessages.filter(msg => msg.favorite === true);
            if (action.payload === state.readMessage.id) {
                state.readMessage = { ...state.readMessage, favorite: state.readMessage.favorite ? false : true }
            }
        }
    }
})





const store = configureStore({
    reducer: {
        emailSlice: emailSlice.reducer,
    },
})



export const { setEmailMessages, handleRead, setReadMessage, handleFavorite } = emailSlice.actions;


export default store;