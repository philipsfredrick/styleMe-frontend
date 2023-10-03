import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Logo,
  searchIcon,
  arrowRight,
  settingsIcon,
  alertIcon,
  profileImg,
  dashboardIcon,
  dashboardWhite,
  wardrobeIcon,
  wardrobeWhite,
  marketIcon,
  marketWhite,
  plusIcon,
} from "../../assets/icons";
import { user1, user2, user3 } from "../../assets/img";

const users = [
  {
    id: 1,
    name: "Sandra",
    image: [user1, user2, user3],
  },

  {
    id: 2,
    name: "Jenny",
    image: [user1, user2, user3],
  },
];

const Closet = () => {
  const [tab, setTab] = useState("wardrobe");

  return (
    <div className="w-full h-full bg-[#F2F5FE]">
      {/* HEADER */}
      <div className="w-full h-20 bg-white flex items-center z-10 fixed px-6 justify-between shadow-md">
        <div className="flex items-center gap-4 bg-[#14213D] text-white p-3">
          <Link to="/">
            <img src={Logo} alt="logo" className="w-[60px] h-[40px]" />
          </Link>
          <h2 className="text-2xl font-semibold">StyleMe</h2>
        </div>
        <div className="flex px-4 rounded-lg items-center gap-3 bg-[#E1E6EF] w-[500px]">
          <img src={searchIcon} alt="search" className="cursor-pointer" />
          <input
            type="search"
            className="w-[90%] h-[40px] bg-[#E1E6EF] border-none outline-none"
            placeholder="What are you looking for?"
          />
          <img src={arrowRight} alt="arrow-btn" className="cursor-pointer" />
        </div>
        <div className="flex items-center gap-6">
          <img
            src={settingsIcon}
            alt="settings-icon"
            className="cursor-pointer"
          />
          <img src={alertIcon} alt="alert-icon" className="cursor-pointer" />
          <div className="flex items-center gap-2">
            <img
              src={profileImg}
              alt="profile-img"
              className="rounded-[50%] h-[40px] w-[40px] cursor-pointer"
            />
            <p className="text-md font-semibold w-32 text-center">
              Welcome back! Sandra
            </p>
          </div>
        </div>
      </div>
      {/* TAB CONTAINER */}
      <div className="h-auto w-[1000px] mx-auto py-28 text-[#14213D]">
        <h1 className="font-bold text-4xl mb-6">Quick actions</h1>
        {/* TABS */}
        <div className="flex gap-4 w-full items-center justify-between bg-[white] rounded-lg p-3">
          
          <div
            onClick={() => setTab("dashboard")}
            className={
              tab === "wardrobe"
                ? "flex  justify-between gap-3 items-center px-20 py-2 rounded-md cursor-pointer bg-[#14213D] text-white"
                : "flex  justify-between gap-3 items-center border border-[#14213D] px-20 py-2 rounded-md cursor-pointer"
            }
          >
            {tab === "wardrobe" ? (
              <img src={wardrobeWhite} alt="wardrobe" />
            ) : (
              <img src={wardrobeIcon} alt="wardrobe" />
            )}
            <p className="text-lg font-semibold">Wardrobe</p>
          </div>
          
        </div>
        {/* PAGE CONTENT */}
        
        {tab === "wardrobe" && (
          <div className="w-full gap-20 h-auto justify-between flex items-center mt-12">
            <div className="flex flex-col gap-10">
              <div className="rounded-lg w-[295px] h-[277px] bg-[#D9D9D9]"></div>
              <button className="border-none ml-6 outline-none text-left text-lg font-semibold">
                Upload
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-6">
                <div className="rounded-lg w-[295px] h-[277px] bg-[#D3EEF9] flex justify-around items-center	">
                  <button className="bg-white w-[132px] h-[52px] text-[#1B1B1B] font-semibold text-lg rounded-md">
                    Add clothes
                  </button>
                </div>
                <div className="rounded-lg w-[295px] h-[277px] bg-[#D3EEF9] flex justify-around items-center">
                  <button className="bg-white text-[#1B1B1B] font-semibold text-lg w-[132px] h-[52px] rounded-md">
                    Add clothes
                  </button>
                </div>
              </div>
              <button className="w-[171px] h-[52px] mx-auto rounded-lg bg-white border border-[#14213D] outline-[#14213D]  cursor-pointer text-center text-lg font-semibold">
                Generate
              </button>
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Closet;
