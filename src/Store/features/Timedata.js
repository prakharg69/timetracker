import { createSlice } from "@reduxjs/toolkit";
import { generateTimedata } from "../../component/timepredata";

const initialState = {
  TimeData: [],
  Activity:[],
  summary:[],
};

const TimeSlice = createSlice({
  name: "timedataa", // ✅ this must match how you register in store
  initialState,
  reducers: {
    AddData: (state, action) => {
      state.TimeData = action.payload;
    },
    AddSummry:(state,action)=>{
      state.summary=action.payload;
    },

    AddTask: (state, action) => {
      const { day,month,year, startTime, activityName, category,notes,endTime } = action.payload;

      if (!state.TimeData || state.TimeData.length === 0) {
        console.warn("⛔ TimeData is empty in AddTask!");
        return;
      }

      const itemIndex = state.TimeData.findIndex(
        (val) => val.date === day.value
      );

      if (itemIndex === -1) {
        console.warn("⛔ Day not found in TimeData");
        return;
      } else {
      }

      const slotIndex = state.TimeData[itemIndex].slots.findIndex(
        (s) => s.start === startTime
      );

      if (slotIndex === -1) {
        console.warn("⛔ Slot not found in slots array");
        console.log(
          "🔍 Available slot starts:",
          state.TimeData[itemIndex].slots.map((s) => s.start)
        );
        return;
      }

      // ✅ Safe to mutate
      const slot = state.TimeData[itemIndex].slots[slotIndex];
      slot.planned = true;
      slot.activityName = activityName;
      slot.category = category;

      console.log("✅ Activity added to slot:", slot);

      const activity = {
        ActivityName:activityName ,
        Day:day.value,
        Month:month.value,
        Year:year.value,
        StartTime: startTime,
        EndTime:endTime ,
        Category:category ,
        Note: notes,
      };
      state.TimeData[itemIndex].activity.push(activity);
      state.Activity.push(activity);
      state.TimeData[itemIndex].summary[category].totalTime += 1;
      state.TimeData[itemIndex].summary[category].totalMinutes = state.TimeData[itemIndex].summary[category].totalTime * 60;
      state.TimeData[itemIndex].summary[category].totalActivity += 1;

      
      const sumInd = state.summary.findIndex((val)=> val.category ===category);
      state.summary[sumInd].totalTime+=1;
       state.summary[sumInd].totalMinutes =  state.summary[sumInd].totalTime * 60
        state.summary[sumInd].totalActivity+=1;

    },
    
  },
});

export const { AddData, AddTask,AddSummry } = TimeSlice.actions;
export default TimeSlice.reducer;
