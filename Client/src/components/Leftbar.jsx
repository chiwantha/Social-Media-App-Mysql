import LoginImg from "../assets/images/login.png";

import Friends from "../assets/leftbar/1.png";
import Groups from "../assets/leftbar/2.png";
import Market from "../assets/leftbar/3.png";
import Watch from "../assets/leftbar/4.png";
import Memories from "../assets/leftbar/5.png";
import Events from "../assets/leftbar/6.png";
import Gaming from "../assets/leftbar/7.png";
import Gallery from "../assets/leftbar/8.png";
import Videos from "../assets/leftbar/9.png";
import Messages from "../assets/leftbar/10.png";
import Tutorials from "../assets/leftbar/11.png";
import Courses from "../assets/leftbar/12.png";
import Fund from "../assets/leftbar/13.png";

const LEFT_BAR_MENU = [
  {
    separator: "Menu",
  },
  {
    item: "Friends",
    icon: Friends,
  },
  {
    item: "Groups",
    icon: Groups,
  },
  {
    item: "Market",
    icon: Market,
  },
  {
    item: "Watch",
    icon: Watch,
  },
  {
    item: "Memories",
    icon: Memories,
  },
  {
    separator: "Your Shortcuts",
  },
  {
    item: "Events",
    icon: Events,
  },
  {
    item: "Gaming",
    icon: Gaming,
  },
  {
    item: "Gallery",
    icon: Gallery,
  },
  {
    item: "Videos",
    icon: Videos,
  },
  {
    item: "Messages",
    icon: Messages,
  },
  {
    separator: "Other",
  },
  {
    item: "Tutorials",
    icon: Tutorials,
  },
  {
    item: "Courses",
    icon: Courses,
  },
  {
    item: "Fund",
    icon: Fund,
  },
];

const Leftbar = () => {
  return (
    <div
      className="overflow-y-scroll dark:bg-[#222] dark:text-white overflow-x-hidden sticky top-[56px] h-[calc(100vh-56px)] scrollbar-hide"
      style={{ flex: 2 }}
    >
      <div className="container p-5">
        <div className="space-y-4">
          {/* user */}
          <div className="flex items-center gap-2.5 font-medium">
            <img
              src={LoginImg}
              alt="UserProfile"
              className="w-[30px] h-[30px] rounded-full object-cover object-center"
            />
            <span className="text-sm">Kasun Chiwantha</span>
          </div>
          {/* Items */}
          {LEFT_BAR_MENU.map((item, index) =>
            item.separator ? (
              <div className=" flex-col flex gap-3" key={index}>
                <hr className="border-neutral-500/10" />
                <span className="text-sm text-neutral-500">
                  {item.separator}
                </span>
              </div>
            ) : (
              <div
                key={index}
                className="flex items-center gap-2.5 hover:font-bold dark:hover:text-neutral-400"
              >
                <img
                  src={item.icon}
                  alt={`${item.item} Icon`}
                  className="w-[30px] h-[30px] object-cover object-center"
                />
                <span className="text-sm">{item.item}</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
