import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentTour :null,
}

export const tourSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {
    setTournaments:(state, action)=>{
        state.currentTour = action.payload;
        console.log(state.currentTour);
        console.log(action.payload);
    },
    addParticipant:(state, action)=>{
        state.currentTour.participants.push(action.payload);
        console.log(state.currentTour.participants)
    },
    removeParticipant:(state, action)=>{
       const index =  state.currentTour.participants.findIndex((data)=>{
            return action.payload === data._id
           });

        state.currentTour.participants.splice(index,1);
        console.log( state.currentTour.participants)
    },
    editParticipant:(state, action)=>{
      const index =  state.currentTour.participants.findIndex((data)=>{
           return action.payload === data._id
          });

       state.currentTour.participants[index] = action.payload
       console.log( state.currentTour.participants)
   },
    
  },
})


export const { setTournaments, addParticipant, removeParticipant, editParticipant } = tourSlice.actions

export default tourSlice.reducer