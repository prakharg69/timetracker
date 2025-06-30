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


  const contextValue = { showForm, setShowForm,activityName,setActivityName,category, setCategory,startTime, setStartTime, endTime, setEndTime,selectedDay, setSelectedDay,selectedMonth, setSelectedMonth,selectedYear, setSelectedYear,notes, setNotes
 };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalData = () => useContext(GlobalContext);
