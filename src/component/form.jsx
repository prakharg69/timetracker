import React from "react";
import { FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { Days, Months, Year } from "./timepredata";
import { useGlobalData } from "../context/global";
import { AddTask, EditTask } from "../Store/features/Timedata";

function Timeform() {
  const dispatch = useDispatch();
  const {
    showForm, setShowForm,
    activityName, setActivityName,
    category, setCategory,
    startTime, setStartTime,
    endTime, setEndTime,
    selectedDay, setSelectedDay,
    selectedMonth, setSelectedMonth,
    selectedYear, setSelectedYear,
    notes, setNotes,Editing,setEditing,setActivity,Activity
  } = useGlobalData();

  

  const { TimeData } = useSelector((state) => state.timedataa);
   

  const slotOptions = TimeData?.[0]?.slots?.map((slot) => ({
    value: slot.start,
    label: slot.start
  })) || [];

  const optionsD = Days.map((d) => ({ value: d, label: d }));
  const optionsM = Months.map((m) => ({ value: m, label: m }));
  const optionsY = Year.map((y) => ({ value: y, label: y }));

  const parseTimeToMinutes = (timeStr) => {
    const period = timeStr.slice(-2);
    const [hours, minutes] = timeStr.slice(0, -2).split(":").map(Number);
    let totalHours = hours;

    if (period === "PM" && hours !== 12) totalHours += 12;
    if (period === "AM" && hours === 12) totalHours = 0;

    return totalHours * 60 + minutes;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!startTime || !endTime) {
      alert("Please select both start and end time.");
      return;
    }

    const startMin = parseTimeToMinutes(startTime.value);
    const endMin = parseTimeToMinutes(endTime.value);

    if (startMin >= endMin) {
      alert("Start time must be earlier than end time.");
      return;
    }

    if (endMin - startMin > 60) {
      alert("Duration must not exceed 1 hour.");
      return;
    }

    const dateMatch = TimeData.find((v) =>
      v.date === selectedDay?.value &&
      v.Month === selectedMonth?.value &&
      v.Year === selectedYear?.value
    );
   
    if (!dateMatch) {
      alert("Day is not traceable.");
      return;
    }
 const dayInd = TimeData.findIndex((val)=> val.date === selectedDay?.value);
    const slotInd = TimeData[dayInd].slots.findIndex((val)=> val.start ===startTime?.value)
    const checkActivity = TimeData[dayInd].slots[slotInd].activityName;
    if(checkActivity!=="" && !Editing){
      alert("Day is already have planes");
      return 
    }
    const activity = {
      activityName,
      category,
      startTime: startTime.value,
      endTime: endTime.value,
      day: selectedDay,
      month: selectedMonth,
      year: selectedYear,
      notes
    };
    if(Editing){
      dispatch(EditTask({ activity, oldActivity: Activity }));
    }else{
        dispatch(AddTask(activity));
    }

    

    // Reset form
    setActivityName("");
    setCategory("");
    setStartTime(null);
    setEndTime(null);
    setSelectedDay(null);
    setSelectedMonth(null);
    setSelectedYear(null);
    setNotes("");
     setEditing(false);
    setShowForm(false);
         
  };
  const formcancel=()=>{
    setActivityName("");
    setCategory("");
    setStartTime(null);
    setEndTime(null);
    setSelectedDay(null);
    setSelectedMonth(null);
    setSelectedYear(null);
    setNotes("");
    setShowForm(false);
  }

  return showForm && (
    <div className="absolute top-[5rem] bg-black left-[30rem] border border-white/10 p-[1rem] flex flex-col gap-2.5 w-[30rem]">
      <div className="flex justify-between items-center">
        <p>New Activity</p>
        <FiX
          className="text-xl cursor-pointer hover:text-red-400"
          onClick={() => formcancel()}
        />
      </div>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label className="text-sm text-[#9A9A9A] mb-1">Activity Name*</label>
        <input
          type="text"
          value={activityName}
          onChange={(e) => setActivityName(e.target.value)}
          className="border border-white/10 h-[2rem] px-2 text-white focus:outline-none"
          required
        />

        <div className="mt-[1rem]">
          <p className="text-sm text-[#9A9A9A] mb-1">Category</p>
          <div className="flex flex-wrap gap-1">
            {["No Category", "Work", "Personal", "Health & Fitness", "Learning", "Workout"].map((cat) => (
              <label key={cat} className="relative cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  value={cat}
                  className="peer hidden"
                  checked={category === cat}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                />
                <div className="p-[1rem] h-10 border border-white/10 bg-white/5 text-white/60 flex items-center justify-center text-sm font-medium peer-checked:bg-white peer-checked:text-[#9A9A9A] gap-1.5">
                  {["Work", "Personal", "Health & Fitness", "Learning", "Workout"].includes(cat) && (
                    <span className="w-2 h-2 rounded-full bg-[#9A9A9A] peer-checked:opacity-100" />
                  )}
                  {cat}
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="flex mt-[1rem] gap-[1rem]">
          <div className="flex flex-col w-1/2">
            <p className="text-sm text-white/60">Start Time</p>
            <Select
              options={slotOptions}
              value={startTime}
              onChange={setStartTime}
              className="text-black"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <p className="text-sm text-white/60">End Time</p>
            <Select
              options={slotOptions}
              value={endTime}
              onChange={setEndTime}
              className="text-black"
            />
          </div>
        </div>

        <div className="flex mt-[1rem] gap-[1rem]">
          <div className="flex flex-col w-1/3">
            <p className="text-sm text-white/60">Day</p>
            <Select
              options={optionsD}
              value={selectedDay}
              onChange={setSelectedDay}
              className="text-black"
            />
          </div>
          <div className="flex flex-col w-1/3">
            <p className="text-sm text-white/60">Month</p>
            <Select
              options={optionsM}
              value={selectedMonth}
              onChange={setSelectedMonth}
              className="text-black"
            />
          </div>
          <div className="flex flex-col w-1/3">
            <p className="text-sm text-white/60">Year</p>
            <Select
              options={optionsY}
              value={selectedYear}
              onChange={setSelectedYear}
              className="text-black"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1 mt-[1rem]">
          <p className="text-sm text-[#9A9A9A]">Notes (optional)</p>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Project details or message..."
            className="w-full px-2 py-2 bg-white/5 border border-white/10 text-sm placeholder-white/30 focus:outline-none focus:border-white/30"
          />
        </div>

        <div className="w-full flex mt-[1rem] justify-end">
          <button className="p-2.5 bg-white text-black" type="submit">
            Save Activity
          </button>
        </div>
      </form>
    </div>
  );
}

export default Timeform;
