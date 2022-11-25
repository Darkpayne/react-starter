import { createSlice } from "@reduxjs/toolkit";

// A function that checks the value of the item stored in the local storage and returns it
function getLocalStorageItem(item){
    var dataStored = localStorage.getItem(item)
    if (dataStored !== undefined || null || ''){ 
        return dataStored   
    }else{return null}
}

const initialState = {
    user : getLocalStorageItem('user'),
    token: getLocalStorageItem('token')
}


const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setAuth : (state, action ) =>{
            state.user = localStorage.setItem('user', action.payload);
        },
        setToken : (state,action) =>{
            state.token = localStorage.setItem('token',action.payload);
        }
    }
})

export const {setAuth,setToken} = authSlice.actions;
export default authSlice.reducer;