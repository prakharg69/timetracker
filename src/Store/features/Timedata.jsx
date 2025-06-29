import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  TimeData: []
}

const TimeSlice = createSlice({
  name: 'TimeData',
  initialState,
  reducers: {
    AddData: (state, action) => {
      state.TimeData = action.payload 
      
    }
  }
})

export const { AddData } = TimeSlice.actions
export default TimeSlice.reducer
