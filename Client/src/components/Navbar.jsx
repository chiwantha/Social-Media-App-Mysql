import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const { darkMode, toggle } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  // console.log(`url(../assets/images/${currentUser.image})`);

  return (
    <div className="sticky top-0 flex justify-between items-center py-2.5 px-5 h-14 border-b dark:text-white bg-white dark:bg-[#222] dark:border-neutral-600 border-gray-300">
      {/* left */}
      <div className="flex items-center gap-7">
        <Link to="/home">
          <span className="font-bold text-2xl text-blue-800">MY-STACK</span>
        </Link>
        <HomeOutlinedIcon />
        <div className="cursor-pointer" onClick={toggle}>
          {darkMode ? <WbSunnyOutlinedIcon /> : <DarkModeOutlinedIcon />}
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
            src={`/${currentUser.image}`}
            alt="UserProfile"
            className="w-[30px] h-[30px] rounded-full object-cover object-center"
          />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
