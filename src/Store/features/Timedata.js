import { createSlice } from "@reduxjs/toolkit";
import { generateTimedata } from "../../component/timepredata";

const initialState = {
  TimeData:[],
  totaldays:0,
};

const TimeSlice = createSlice({
  name: "timedataa", // ✅ this must match how you register in store
  initialState,
  reducers: {
    AddData: (state, action) => {
      state.TimeData = action.payload;
    
    },

   AddTask: (state, action) => {
  const { day, startTime, activityName, category } = action.payload;

  

  if (!state.TimeData || state.TimeData.length === 0) {
    console.warn("⛔ TimeData is empty in AddTask!");
    return;
  }

  const itemIndex = state.TimeData.findIndex(val => val.date === day.value);

  if (itemIndex === -1) {
    console.warn("⛔ Day not found in TimeData");
    return;
  }else{
  }

  const slotIndex = state.TimeData[itemIndex].slots.findIndex(
    (s) => s.start === startTime
  );

  if (slotIndex === -1) {
    console.warn("⛔ Slot not found in slots array");
    console.log("🔍 Available slot starts:", state.TimeData[itemIndex].slots.map(s => s.start));
    console.log("🔍 Trying to match:", startTime);
    return;
  }

  // ✅ Safe to mutate
  const slot = state.TimeData[itemIndex].slots[slotIndex];
  slot.activityName = activityName;
  slot.category = category;

  console.log("✅ Activity added to slot:", slot);
}

  }
});

export const { AddData, AddTask } = TimeSlice.actions;
export default TimeSlice.reducer;
