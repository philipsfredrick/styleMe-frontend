import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Logo,
  searchIcon,
  arrowRight,
  settingsIcon,
  alertIcon,
  profileImg,
  dashboardIcon,
  dashboardWhite,
  marketIcon,
  marketWhite,
  plusIcon,
  Downwardarrow,
  Nativewear,
  Partywear,
  Workwear,
  Sundaywear,
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

const Dashboard = () => {
  const [tab, setTab] = useState("dashboard");
  const navigate = useNavigate();

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
              tab === "dashboard"
                ? "flex  justify-between gap-3 items-center px-20 py-2 rounded-md cursor-pointer bg-[#14213D] text-white"
                : "flex  justify-between gap-3 items-center border border-[#14213D] px-20 py-2 rounded-md cursor-pointer"
            }
          >
            {tab === "dashboard" ? (
              <img src={dashboardWhite} alt="dashboard" />
            ) : (
              <img src={dashboardIcon} alt="dashboard" />
            )}
            <p className="text-lg font-semibold">Dashboard</p>
          </div>

          <div
            onClick={() => setTab("marketplace")}
            className={
              tab === "marketplace"
                ? "flex  justify-between gap-3 items-center px-20 py-2 rounded-md cursor-pointer bg-[#14213D] text-white"
                : "flex  justify-between gap-3 items-center border border-[#14213D] px-20 py-2 rounded-md cursor-pointer"
            }
          >
            {tab === "marketplace" ? (
              <img src={marketWhite} alt="marketplace" />
            ) : (
              <img src={marketIcon} alt="marketplace" />
            )}
            <p className="text-lg font-semibold">Marketplace</p>
          </div>
        </div>
        <h3 className="font-bold text-xl pl-2 pb-10 pt-5 text-[#14213D]">
          Categories
        </h3>
        {/* PAGE CONTENT */}
        {tab === "dashboard" && (
          <div className="wholeoutfit flex w-[900px]  items-center gap-4 rounded-xl border border-solid ">
            <button
              className="work flex flex-col items-center gap-1 "
              onClick={() => navigate("/closet")}
            >
              <img src={Workwear} alt="" className="pl-2" />
              <div className="flex gap-1">
                <p>Work Closet </p>
                <img src={Downwardarrow} alt="" />
              </div>
            </button>
            <button className="sunday" onClick={() => navigate("/closet")}>
              <img src={Sundaywear} alt="" />
              <div className="flex gap-1">
                <p>Sunday Closet</p>
                <img src={Downwardarrow} alt="" />
              </div>
            </button>
            <button className="native" onClick={() => navigate("/closet")}>
              <img src={Nativewear} alt="" />
              <div className="flex gap-1">
                <p>Native Closet</p>
                <img src={Downwardarrow} alt="" />
              </div>
            </button>
            <button className="party" onClick={() => navigate("/closet")}>
              <img src={Partywear} alt="" />
              <div className="flex gap-1 p">
                <p>Party Closet</p>
                <img src={Downwardarrow} alt="" />
              </div>
            </button>
          </div>
        )}
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
        {tab === "marketplace" && (
          <div className="w-full gap-20 h-auto justify-between flex flex-col mt-12">
            {/* USERS */}
            {users.map((user) => (
              <div key={user.id} className="">
                <h1 className=" font-bold text-2xl mb-6">
                  {" "}
                  User {user.id}: <span>{user.name}</span>
                </h1>
                <div className="flex">
                  <div className="flex relative h-auto flex-wrap gap-3 bg-white py-6 px-4">
                    {user.image.map((img) => (
                      <div className="rounded-lg w-[290px] h-[270px] mb-6">
                        <img
                          src={img}
                          alt="user"
                          className="w-full rounded-lg"
                        />
                      </div>
                    ))}
                    <div className="flex flex-col justify-end">
                      <button className="rounded-full h-[50px] w-[50px] bg-[#14213D] flex items-center justify-around">
                        <img
                          src={plusIcon}
                          alt="plus-icon"
                          className="h-[25px] w-[25px] justify-center"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
