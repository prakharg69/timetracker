import React from "react";
import { FiX } from "react-icons/fi";
import { useSelector } from "react-redux";
import Select from "react-select";
import { Days,Months,Year } from "./timepredata";
import { useGlobalData } from "../context/global";
function Timeform() {
    const {showForm,setShowForm} = useGlobalData();
   
  
    
  const { TimeData } = useSelector((state) => state.timedataa);
  const options = TimeData[0]?.slots.map((slotval) => ({
    value: slotval.start,
    label: slotval.start,
  }));
  const optionsD = Days.map((slotval) => ({
    value: slotval,
    label: slotval,
  }));
  const optionsM = Months.map((slotval) => ({
    value: slotval,
    label: slotval,
  }));
  const optionsY = [{ value:  Year,
    label: Year,}]



  return (
    <div className="absolute top-[5rem] bg-black left-[30rem] border border-white/10 p-[1rem] flex flex-col gap-2.5 w-[30rem]">
      <div className="flex justify-between items-center">
        <p>New Activity</p>
        <FiX
          className="text-xl cursor-pointer hover:text-red-400"
          onClick={() => setShowForm(false)}
        />
      </div>
      <form className="flex flex-col ">
        <label htmlFor="activityName" className="text-sm text-[#9A9A9A] mb-1">
          Activity Name*
        </label>
        <input
          id="activityName"
          type="text"
          name="activityName"
          className="border  border-white/10 h-[2rem] focus:outline-none focus:border-white/30"
          required
        />
        <div className="mt-[1rem]">
          <p className="text-sm text-[#9A9A9A] mb-1">Category</p>
          <div className="flex items-center  gap-1">
            <label className="relative cursor-pointer ">
              <input
                type="radio"
                name="category"
                value="No Category"
                className="peer hidden"
                required
              />
              <div className="p-[1rem] h-10  border border-white/10 bg-white/5 text-white/60 flex items-center justify-center text-sm font-medium duration-300 transition-all peer-checked:bg-white peer-checked:text-[#9A9A9A]  ">
                {" "}
                No Category
              </div>
            </label>
            <label className="relative cursor-pointer">
              <input
                type="radio"
                name="category"
                value="Work"
                className="peer hidden"
                required
              />
              <div className="p-[1rem] h-10 border border-white/10 bg-white/5  text-white/60 flex items-center justify-center text-sm font-medium duration-300 transition-all peer-checked:bg-white peer-checked:text-[#9A9A9A] gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#9A9A9A] peer-checked:opacity-100 transition-all duration-300" />{" "}
                Work
              </div>
            </label>
            <label className="relative cursor-pointer">
              <input
                type="radio"
                name="category"
                value="Personal"
                className="peer hidden"
                required
              />
              <div className="p-[1rem] h-10 border border-white/10 bg-white/5  text-white/60 flex items-center justify-center text-sm font-medium duration-300 transition-all peer-checked:bg-white peer-checked:text-[#9A9A9A] gap-1.5 ">
                <span className="w-2 h-2 rounded-full bg-[#9A9A9A] peer-checked:opacity-100 transition-all duration-300" />{" "}
                Personal
              </div>
            </label>
          </div>
          <div className="flex items-center  gap-1 mt-3">
            <label className="relative cursor-pointer ">
              <input
                type="radio"
                name="category"
                value="Health & Fitness"
                className="peer hidden"
                required
              />
              <div className="p-[1rem] h-10  border border-white/10 bg-white/5  text-white/60 flex items-center justify-center text-sm font-medium duration-300 transition-all peer-checked:bg-white peer-checked:text-[#9A9A9A] gap-1.5 ">
                <span className="w-2 h-2 rounded-full bg-[#9A9A9A] peer-checked:opacity-100 transition-all duration-300" />{" "}
                Health & Fitness
              </div>
            </label>
            <label className="relative cursor-pointer">
              <input
                type="radio"
                name="category"
                value="Learning"
                className="peer hidden"
                required
              />
              <div className="p-[1rem] h-10 border border-white/10 bg-white/5 text-white/60 flex items-center justify-center text-sm font-medium duration-300 transition-all peer-checked:bg-white peer-checked:text-[#9A9A9A] gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#9A9A9A] peer-checked:opacity-100 transition-all duration-300" />{" "}
                Learning
              </div>
            </label>
            <label className="relative cursor-pointer">
              <input
                type="radio"
                name="category"
                value="Workout"
                className="peer hidden"
                required
              />
              <div className="p-[1rem] h-10 border border-white/10 bg-white/5 text-white/60 flex items-center justify-center text-sm font-medium duration-300 transition-all peer-checked:bg-white peer-checked:text-[#9A9A9A] gap-1.5 ">
                <span className="w-2 h-2 rounded-full bg-[#9A9A9A] peer-checked:opacity-100 transition-all duration-300" />{" "}
                Workout
              </div>
            </label>
          </div>
        </div>
        <div className="flex mt-[1rem] gap-[1rem] start-end">
            <div className="start flex flex-col w-1/2">
              <p className="text-sm  text-white/60">Start Time</p>
              <Select options={options} className="text-black"></Select>
            </div>
            <div className="start flex flex-col w-1/2">
              <p className="text-sm  text-white/60">End Time</p>
              <Select options={options} className="text-black"></Select>
            </div>
        </div>
        <div className="day-month-year flex mt-[1rem] gap-[1rem] ">
            <div className="start flex flex-col w-1/3">
              <p className="text-sm  text-white/60">Day</p>
              <Select options={optionsD} className="text-black"></Select>
            </div>
            <div className="start flex flex-col w-1/3">
              <p className="text-sm  text-white/60">Month</p>
              <Select options={optionsM} className="text-black"></Select>
            </div>
            <div className="start flex flex-col w-1/3">
              <p className="text-sm  text-white/60">Year</p>
              <Select options={optionsY} className="text-black"></Select>
            </div>
        </div>
        <div className="flex flex-col gap-1 mt-[1rem]">
            <p className="text-sm  text-[#9A9A9A]">Notes (optional)</p>
            <textarea  name="message"  placeholder="Project details or message..."     className="w-full px-2 py-2 bg-white/5 border border-white/10 text-sm placeholder-white/30 focus:outline-none   transition-all duration-300 focus:border-white/30" required></textarea>
        </div>
        <div className="w-full flex mt-[1rem] justify-end"> 
            <button className="p-2.5 bg-white text-black" type="submit "> Save Activity</button>
        </div>
      </form>
    </div>
  );
}

export default Timeform;
