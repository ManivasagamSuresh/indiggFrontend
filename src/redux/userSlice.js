import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUuser:null,
  loading:false,
  error:false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: (state) => {
        
      },
    loginSuccess: (state, action) => {
      
    },
    
    loginFailure: (state) => {
      
    },
    logout: (state) => {
        
    },
    addTournament:(state, action)=>{

    }
  },
})


export const { loginStart, loginSuccess, loginFailure, logout, addTournament } = userSlice.actions

export default userSlice.reducer