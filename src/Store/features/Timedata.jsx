import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    TimeData:[]
}
const TimeSlice = createSlice({
    name:'TimeData',
    initialState,
    reducers:{
        AddData:(state,action)=>{

        }
    }
})
export const {AddData} = TimeSlice.actions
export default TimeSlice.reducer;