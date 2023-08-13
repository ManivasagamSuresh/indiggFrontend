import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser:null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    
    loginSuccess: (state, action) => {
      state.currentUser = action.payload
      // console.log(state.currentUser);
    },
    
    logout: (state) => {
        state.current = null;
    },
    addTournament:(state, action)=>{
      state.currentUser.tournaments.push(action.payload);
      console.log(state.currentUser.tournaments)
    },
    removeTournament:(state, action)=>{
      const index = state.currentUser.tournaments.findIndex((id)=>{
       return action.payload === id
      });
      console.log(index);
      state.currentUser.tournaments.splice(index,1);
      console.log(state.currentUser.tournaments)
    },
    
  },
})


export const { loginStart, loginSuccess, loginFailure, logout, addTournament, removeTournament } = userSlice.actions

export default userSlice.reducer