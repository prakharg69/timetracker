import { createContext, useContext, useState } from "react";
import {  Year } from "../component/timepredata";
const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [showForm, setShowForm] = useState(false);
// Form state
  const [activityName, setActivityName] = useState("");
  const [category, setCategory] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [notes, setNotes] = useState("");
  const [Editing,setEditing]=useState(false);
  const [Activity,setActivity]=useState({});


  const openForm = (slotData, ValueData) => {

  setStartTime({ value: slotData.start, label: slotData.start });
  setEndTime({ value: slotData.end, label: slotData.end });
  setSelectedDay({ value: ValueData.date, label: String(ValueData.date) });
  setSelectedMonth({ value: ValueData.Month, label: ValueData.Month });
  setSelectedYear({ value: ValueData.Year, label: String(ValueData.Year) });
  setShowForm(true);
};
const EditForm =(ActivData)=>{
  setActivity(ActivData)
  setEditing(true);
  setStartTime({ value: ActivData.StartTime, label: ActivData.StartTime });
  setEndTime({ value: ActivData.EndTime, label: ActivData.EndTime });
  setSelectedDay({ value: ActivData.Day, label: String(ActivData.Day) });
  setSelectedMonth({ value: ActivData.Month, label: ActivData.Month });
  setSelectedYear({ value: ActivData.Year, label: String(ActivData.Year) });
  setShowForm(true);

}


  const contextValue = { setActivity,Activity,showForm,setEditing,Editing, setShowForm,activityName,setActivityName,category, setCategory,startTime, setStartTime, endTime, setEndTime,selectedDay, setSelectedDay,selectedMonth, setSelectedMonth,selectedYear, setSelectedYear,notes, setNotes,openForm,EditForm
 };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalData = () => useContext(GlobalContext);
