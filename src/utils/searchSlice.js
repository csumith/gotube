import { createSlice } from "@reduxjs/toolkit"


const searchSlice = createSlice({
    name:"caching",
    initialState:{

    },
    reducers:{
        addCache:(state,action)=>{
          state= Object.assign(state,action.payload)
        }
    }
    
})

export const {addCache} =  searchSlice.actions
export default searchSlice.reducer