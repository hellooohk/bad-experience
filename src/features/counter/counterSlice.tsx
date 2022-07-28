import { createSlice } from '@reduxjs/toolkit'
import Experience from '../../data/dummyData.json';
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    experienceData : Experience,
  },
  reducers: {
    addExperience : (state:any,action:any) => {
        state.experienceData.unshift(action.payload);
    },
    
  }
})

// Action creators are generated for each case reducer function
export const { addExperience } = counterSlice.actions

export default counterSlice.reducer