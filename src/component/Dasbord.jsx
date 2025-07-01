import React, { useEffect, useState } from "react";
import { FcReuse } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { AddData, AddSummry } from "../Store/features/Timedata";
import { generateTimedata } from "./timepredata";
import { categoryStats } from "./timepredata";
import { useGlobalData } from "../context/global";
import { categoryColors } from "./timepredata";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const Dasbord = () => {
  const [filled, setFilled] = useState(false);
  const { summary } = useSelector((state) => state.timedataa);
  const {Activity} = useSelector((state) => state.timedataa);
  const { openForm,EditForm } = useGlobalData();
  useEffect(() => {
    const timer = setTimeout(() => {
      setFilled(true);
    }, 100); // slight delay so transition is visible
    return () => clearTimeout(timer);
  }, []);

  const { TimeData } = useSelector((state) => state.timedataa);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AddData(generateTimedata()));
    dispatch(AddSummry(categoryStats));
  }, []);
  useEffect(() => {
    console.log(TimeData);
  }, [TimeData]);

  return (
    <div className="p-[1rem] flex gap-1">
      <div className="left w-4/6 p-[1rem]">
        <div className="aa flex bg-[#2A2A2A] p-[1rem] gap-1.5 ">
          <FcReuse></FcReuse> Week History
        </div>
        <div className="mt-1 flex gap-[1rem] overflow-hidden overflow-x-scroll overflow-y-scroll ">
          {TimeData.map((value, index) => {
            return (
              <div className="flex flex-col " key={index}>
                <div className="flex items-center flex-col justify-center  p-[1rem]">
                  <p>{value.DayName}</p>
                  <p className="text-[#9A9A9A] text-sm">
                    {value.Month} {value.date}
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center p-[5px] gap-1 border border-white/10">
                  <p className="text-[14px] mt-[8px]">
                    {value.DayName} {value.Month} {value.date}
                  </p>
                  {value.slots.map((slotval, index) => {
                    const isPlanned = slotval.activityName?.trim();

                    return (
                      <div
                        key={index}
                        className={`w-[10rem] min-h-[3.5rem] p-2 rounded-md shadow-md cursor-pointer flex flex-col justify-between 
        transition-all duration-300 ease-in-out
        ${
          isPlanned
            ? ` text-white`
            : "bg-[#1f1f1f] text-gray-300 hover:bg-[#2c2c2c]"
        }`}
                        style={
                          isPlanned
                            ? {
                                backgroundColor:
                                  categoryColors[slotval.category],
                              }
                            : {}
                        }
                        onClick={() => openForm(slotval, value)}
                      >
                        <div
                          className={`text-xs ${
                            isPlanned ? "text-black" : " text-gray-500"
                          }`}
                        >
                          {slotval.start} - {slotval.end}
                        </div>

                        <div className="text-sm font-medium truncate">
                          {slotval.activityName || "No activity"}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right w-2/6 p-[1rem] ">
        <div className="aa flex bg-[#161616] rounded-2xl flex-col p-[2rem] gap-1.5 ">
          <h1 className="text-2xl">Activity Summery</h1>
          <div className="flex flex-col mt-[1rem] gap-2.5">
            <h1 className="mb-[1rem]">Time By Category</h1>
            {summary.map((val, index) => {
              return (
                <div
                  key={index}
                  className="bg-[#2A2A2A] p-[1rem] flex flex-col gap-2"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 justify-center items-center">
                      {" "}
                      <p className="text-[13px]">{val.category}</p>
                      <div
                        className="h-[0.7rem] w-[0.7rem] rounded-4xl "
                        style={{
                          backgroundColor: categoryColors[val.category],
                        }}
                      ></div>
                    </div>
                    <div className="bg-[#4A4A4A] rounded-4xl text-white pl-[0.7rem] pr-[0.7rem] text-[13px]">{`${val.totalTime}h (${val.totalActivity} Activities)`}</div>
                  </div>
                  <div className="bg-[#5C5C5C] h-[1.1rem] w-full rounded-4xl">
                    <div
                      className={`h-full bg-[#ADADAD]  duration-1000 transition-all ease-in-out  rounded-4xl ${
                        filled ? "w-full" : "w-0"
                      }`}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col mt-[1rem] gap-2.5">
            <h1 className="mb-[1rem]">Planned Activities</h1>
            {Activity.map((val, index) => {
              return (
                <div
                  key={index}
                  className="bg-[#2A2A2A] p-[1rem] flex flex-col gap-[2px]"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 justify-center items-center ">
                      <p>{val.ActivityName} </p>{" "}
                      <p className="pl-[4px] pr-[4px] rounded-4xl bg-[#494A4A] text-[13px]">
                        {val.Category}
                      </p>
                    </div>
                    <div className=" flex gap-1.5">
                      <FiEdit
                        className="text-[#B0B0B0] cursor-pointer hover:text-[#E0E0E0]"
                        title="Edit"
                      onClick={()=> EditForm(val)}
                      />
                      <FiTrash2
                        className="text-[#9A4A4A] cursor-pointer hover:text-[#D05C5C]"
                        title="Delete"
                      />
                    </div>
                  </div>
                  <div className="text-sm  text-gray-500">{val.StartTime} - {val.EndTime}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dasbord;
