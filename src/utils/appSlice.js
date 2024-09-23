import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({

    name:"app",
    initialState:{
        isMenuOpen:true,
       
    },
    reducers:{
        addToggle:(state)=>{
            state.isMenuOpen = !state.isMenuOpen
        },
        closeMenu:(state)=>{
            state.isMenuOpen = false
        }
    }


})
export const {addToggle,closeMenu} = appSlice.actions
export default appSlice.reducer