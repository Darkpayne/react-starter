import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : null,
    token:""
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setAuth : (state, {action} ) =>{
            state.user = localStorage.setItem('user', action);
        } 
    }
})

export default authSlice.reducer;