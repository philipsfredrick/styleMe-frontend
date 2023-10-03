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
import {
  Workwear,
  Partywear,
  Sundaywear,
  Nativewear,
  Downwardarrow,
} from "../../assets/dashboardImages";
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

const Wardrobe = () => {
  const [tab, setTab] = useState("dashboard");
  const [images, setImages] = useState([]);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleFileUpload = (event) => {
    const selectedImage = event.target.files;
    const selectedImageArray = Array.from(selectedImage);

    const imageArray = selectedImageArray.map((image) => {
      return URL.createObjectURL(image);
    });

    setImages((previousImages) => previousImages.concat(imageArray));

    console.log("Selected file:", selectedImage);
  };

  const handleToggleDropdown = (index) => {
    setOpenDropdownIndex(index === openDropdownIndex ? null : index);
  };

  const handleImageDelete = (index) => {
    const updatedImages = images.filter((image, e) => e !== index);
    setImages(updatedImages);
  };

  const handleSell = (index) => {
    
    setImages(updatedImages);
  };

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
            onClick={() => setTab("wardrobe")}
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
        {/* PAGE CONTENT */}
        {tab === "dashboard" && (
          <div className="flex flex-col">
          <div className="text-zinc-900 text-opacity-90 text-2xl font-bold font-['Manrope'] leading-9">Categories</div>

          <div className="flex flex-col w-[900px] gap-6 rounded-xl border border-solid justify-start items-center gap-6 inline-flex">
            
            <div className="flex gap-4">
              <button
                className="work flex flex-col items-center gap-1"
                onClick={() => navigate("/work-closet")}
              >
                <img src={Workwear} alt="" className="pl-2" />
                <div className="flex gap-1 font-bold">
                  <p>Work Closet </p>
                  <img src={Downwardarrow} alt="" />
                </div>
              </button>
              <button className="sunday" onClick={() => navigate("/sunday-closet")}>
                <img src={Sundaywear} alt="" />
                <div className="flex gap-1 font-bold">
                  <p>Sunday Closet</p>
                  <img src={Downwardarrow} alt="" />
                </div>
              </button>
              <button className="native" onClick={() => navigate("/native-closet")}>
                <img src={Nativewear} alt="" />
                <div className="flex gap-1 font-bold">
                  <p>Native Closet</p>
                  <img src={Downwardarrow} alt="" />
                </div>
              </button>
              <button className="party" onClick={() => navigate("/party-closet")}>
                <img src={Partywear} alt="" />
                <div className="flex gap-1 font-bold">
                  <p>Party Closet</p>
                  <img src={Downwardarrow} alt="" />
                </div>
              </button>
            </div>
          </div>
          </div>
        )}

        {tab === "wardrobe" && (
          <div className="flex flex-col items-center justify-center gap-20 mt-12">
            <div className="flex flex-col gap-10">
              <label className="w-[171px] h-[52px] rounded-lg bg-white border border-[#14213D] outline-[#14213D]  cursor-pointer text-center text-lg font-semibold">
                Upload
                <input
                  type="file"
                  name="images"
                  multiple
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileUpload}
                />
              </label>
              <div className="flex flex-wrap gap-10 relative">
                {images &&
                  images.map((imageSrc, index) => (
                    <div key={index} className="relative">
                      <img
                        src={imageSrc}
                        alt={`Image ${index}`}
                        className="object-cover w-48 h-48 bg-transparent"
                      />
                      <div
                        className="absolute top-0 right-0 m-2 cursor-pointer"
                        onClick={() => handleToggleDropdown(index)}
                      >
                        <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white"></div>
                          <div className="w-2 h-2 bg-white mt-1"></div>
                          <div className="w-2 h-2 bg-white mt-1"></div>
                        </div>
                      </div>
                      {openDropdownIndex === index && (
                        <div className="absolute top-0 right-0 mt-10">
                          <div className="bg-white border rounded-lg shadow-lg">
                            <button
                              className="block w-full py-2 px-4 text-gray-700 hover:text-red-500 text-left"
                              onClick={() => handleSell(index)}
                            >
                              Sell
                            </button>
                            <button
                              className="block w-full py-2 px-4 text-gray-700 hover:text-red-500 text-left"
                              onClick={() => handleImageDelete(index)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <button className="w-[171px] h-[52px] rounded-lg bg-white border border-[#14213D] outline-[#14213D] cursor-pointer text-center text-lg font-semibold mt-auto">
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

export default Wardrobe;
