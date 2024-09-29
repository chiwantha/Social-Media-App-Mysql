import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import LoginImg from "../assets/images/login.png";
import { useState } from "react";

const Navbar = () => {
  const [isDark, setisDark] = useState(false);

  function toggleDarkMode() {
    document.documentElement.classList.toggle("dark");
    setisDark(!isDark);
  }

  return (
    <div className="sticky top-0 flex justify-between items-center py-2.5 px-5 h-14 border-b dark:text-white bg-white dark:bg-[#222] dark:border-neutral-600 border-gray-300">
      {/* left */}
      <div className="flex items-center gap-7">
        <Link to="/home">
          <span className="font-bold text-2xl text-blue-800">MY-STACK</span>
        </Link>
        <HomeOutlinedIcon />
        <div className="cursor-pointer" onClick={toggleDarkMode}>
          {isDark ? <WbSunnyOutlinedIcon /> : <DarkModeOutlinedIcon />}
        </div>
        <GridViewOutlinedIcon />
        <div className="flex items-center gap-2.5 border border-gray-300 p-1 rounded-lg">
          <SearchOutlinedIcon />
          <input
            type="search"
            placeholder="Search Here ..."
            className="outline-none w-80 dark:bg-[#222]"
          />
        </div>
      </div>
      {/* right */}
      <div className="flex items-center gap-7">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="flex items-center gap-2 font-medium">
          <img
            src={LoginImg}
            alt="UserProfile"
            className="w-[30px] h-[30px] rounded-full object-cover object-center"
          />
          <span>Kasun Chiwantha</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
