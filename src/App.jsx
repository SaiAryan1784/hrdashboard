
import React from "react";
import person from './assets/people.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBell, faBorderNone, faCloud, faEnvelope, faNoteSticky, faSquarePlus, faUsers } from "@fortawesome/free-solid-svg-icons";
// import {templogo} from './assets/5873529.jpg'
// import {templogo} from './assets/5873529.jpg'

// import {fa} from '@fortawesome/free-solid-svg-icons'



const App = () => {
  const active = {
    background: "#4b5868",
  };
  return (
    <>
      <div className="flex">
        <div className="flex-[23%] h-screen bg-[#2A3646] overflow-hidden">
          <img src={person} alt="" className="h-[8rem] mx-auto mt-[2.4rem] bg-slate-300 rounded-3xl" />
          <h1 className=" font-bold text-center mt-2 text-white">NAME</h1>
          <hr className="mx-8 my-4" />

          <div className="flex pl-[3rem] gap-3 mt-[4rem] p-2" style={active}>
            <FontAwesomeIcon icon={faBorderNone} className="p-[9px]"/>
            <h1 className=" text-2xl text-center">Dashboard</h1>
          </div>
          <div className="flex pl-[3rem] gap-3  p-2 ">
            <FontAwesomeIcon icon={faSquarePlus} className="p-[9px]"/>
            <h1 className=" text-2xl text-center">New Employees</h1>
          </div>
          <div className="flex pl-[3rem] gap-3  p-2 ">
            <FontAwesomeIcon icon={faUsers} className="p-[9px]"/>
            <h1 className=" text-2xl text-center">Employees</h1>
          </div>
          <div className="flex pl-[3rem] gap-3  p-2 ">
            <FontAwesomeIcon icon={faNoteSticky} className="p-[9px]"/>
            <h1 className=" text-2xl text-center">Reports</h1>
          </div>

        </div>
        <div className="flex-[77%] h-screen">
          <div className="flex justify-between h-auto bg-slate-300">
            <img src={person} alt="" className="h-[4.5rem] m-2 ml-6 rounded-1xl" />
            <div className="flex gap-5 items-center">
              <FontAwesomeIcon icon={faBell} className="text-2xl m-3"/>
              <FontAwesomeIcon icon={faCloud} className="text-2xl m-3"/>
              <FontAwesomeIcon icon={faEnvelope} className=" mr-8 text-2xl ml-3"/>
            </div>
          </div>
          <div className=" flex justify-around">
                <div className="flex">
                  <div className="h-[9rem] w-[12rem] bg-slate-200 shadow-2xl rounded-lg mt-[4rem] ml-[6rem] block mx-3">
                      <h1 className=" text-6xl text-center mt-3 text-green-700 font-bold">20</h1>
                      <h1 className="text-center font-semibold mt-4">Employee on leave</h1>
                  </div>
                  <div className="h-[9rem] w-[12rem] bg-slate-200 shadow-2xl rounded-lg mt-[4rem] ml-[6rem] block mr-8">
                      <h1 className=" text-6xl text-center mt-3 text-red-700 font-bold">20</h1>
                      <h1 className="text-center font-semibold mt-4">Leave Request</h1>
                  </div>
                </div>
          <div>
            <h1 className=" mr-[10rem] font-semibold mt-[5rem] mx-4">Employee on leave this week</h1>
              <div className="mx-5">
                <div className="flex justify-between mt-3 mb-2 p-3">
                  <img src={person} alt="" className="h-[2rem] bg-slate-300 rounded-3xl" />
                  <h1 className="text-center font-medium">FName</h1>
                  <h1 className="text-center font-medium">17/11/23-20/11/23</h1>
                  <h1>Sick</h1>
                </div>
                <div className="flex justify-between mt-3 mb-2 p-3">
                  <img src={person} alt="" className="h-[2rem] bg-slate-300 rounded-3xl" />
                  <h1 className="text-center font-medium">FName</h1>
                  <h1 className="text-center font-medium">17/11/23-20/11/23</h1>
                  <h1>Sick</h1>
                </div>
                <div className="flex justify-between mt-3 mb-2 p-3">
                  <img src={person} alt="" className="h-[2rem] bg-slate-300 rounded-3xl" />
                  <h1 className="text-center font-medium">FName</h1>
                  <h1 className="text-center font-medium">17/11/23-20/11/23</h1>
                  <h1>Sick</h1>
                </div>
                <div className="flex justify-between mt-3 mb-2 p-3">
                  <img src={person} alt="" className="h-[2rem] bg-slate-300 rounded-3xl" />
                  <h1 className="text-center font-medium">FName</h1>
                  <h1 className="text-center font-medium">17/11/23-20/11/23</h1>
                  <h1>Sick</h1>
                </div>
                <div className="flex justify-between mt-3 mb-2 p-3">
                  <img src={person} alt="" className="h-[2rem] bg-slate-300 rounded-3xl" />
                  <h1 className="text-center font-medium">FName</h1>
                  <h1 className="text-center font-medium">17/11/23-20/11/23</h1>
                  <h1>Sick</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden h-[4rem] mt-[2rem] mx-[8rem] rounded-lg flex justify-between bg-slate-300 p-4">
            <h1 className="text-center text-3xl">Employee</h1>
            <h1 className="text-center text-3xl">Duration</h1>
            <h1 className="text-center text-3xl">Leave Type</h1>
            <h1 className="text-center text-3xl">Status</h1>
          </div>
          <div className="mx-[8rem]">
            <div className="flex justify-between mt-3 mb-2 p-3">
              <div className="flex gap-[3rem]">
                <img src={person} alt="" className="h-[2rem] bg-slate-300 rounded-3xl" />
                <h1 className="text-center font-medium">FName</h1>
              </div>
              <h1 className="text-center font-medium mr-[4rem]">17/11/23-20/11/23</h1>
              <h1 className="mr-[5rem]">Sick</h1>
              <h1>Accepted</h1>
            </div>
            <div className="flex justify-between mt-3 mb-2 p-3">
              <div className="flex gap-[3rem]">
                <img src={person} alt="" className="h-[2rem] bg-slate-300 rounded-3xl" />
                <h1 className="text-center font-medium">FName</h1>
              </div>
              <h1 className="text-center font-medium mr-[4rem]">17/11/23-20/11/23</h1>
              <h1 className="mr-[5rem]">Sick</h1>
              <h1>Accepted</h1>
            </div>
            <div className="flex justify-between mt-3 mb-2 p-3">
              <div className="flex gap-[3rem]">
                <img src={person} alt="" className="h-[2rem] bg-slate-300 rounded-3xl" />
                <h1 className="text-center font-medium">FName</h1>
              </div>
              <h1 className="text-center font-medium mr-[4rem]">17/11/23-20/11/23</h1>
              <h1 className="mr-[5rem]">Sick</h1>
              <h1>Accepted</h1>
            </div>
            <div className="flex justify-between mt-3 mb-2 p-3">
              <div className="flex gap-[3rem]">
                <img src={person} alt="" className="h-[2rem] bg-slate-300 rounded-3xl" />
                <h1 className="text-center font-medium">FName</h1>
              </div>
              <h1 className="text-center font-medium mr-[4rem]">17/11/23-20/11/23</h1>
              <h1 className="mr-[5rem]">Sick</h1>
              <h1>Accepted</h1>
            </div>
            <div className="flex justify-between mt-3 mb-2 p-3">
              <div className="flex gap-[3rem]">
                <img src={person} alt="" className="h-[2rem] bg-slate-300 rounded-3xl" />
                <h1 className="text-center font-medium">FName</h1>
              </div>
              <h1 className="text-center font-medium mr-[4rem]">17/11/23-20/11/23</h1>
              <h1 className="mr-[5rem]">Sick</h1>
              <h1>Accepted</h1>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
}; 

export default App;
