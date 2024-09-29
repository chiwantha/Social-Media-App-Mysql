import LoginImg from "../assets/images/login.png";
import Register from "../assets/images/register.jpg";

const USER_MAP = [
  {
    name: "Kasun Chiwantha",
    notification: "changed the profile pic",
    image: LoginImg,
    time: "1 min ago",
    state: 1,
  },
  {
    name: "Alex Johnson",
    notification: "posted a new update",
    image: Register,
    time: "5 mins ago",
    state: 0,
  },
  {
    name: "Sarah Lee",
    notification: "liked your post",
    image: LoginImg,
    time: "10 mins ago",
    state: 1,
  },
  {
    name: "Michael Davis",
    notification: "commented on your photo",
    image: Register,
    time: "20 mins ago",
    state: 1,
  },
  {
    name: "Emily Stone",
    notification: "shared your post",
    image: LoginImg,
    time: "30 mins ago",
    state: 0,
  },
  {
    name: "John Doe",
    notification: "started following you",
    image: Register,
    time: "40 mins ago",
    state: 1,
  },
  {
    name: "Emma Watson",
    notification: "sent you a message",
    image: LoginImg,
    time: "50 mins ago",
    state: 1,
  },
  {
    name: "David Brown",
    notification: "updated his status",
    image: Register,
    time: "1 hour ago",
    state: 1,
  },
  {
    name: "Lucy Green",
    notification: "shared a new link",
    image: LoginImg,
    time: "1 hour 30 mins ago",
    state: 0,
  },
  {
    name: "Oliver Smith",
    notification: "liked your comment",
    image: Register,
    time: "2 hours ago",
    state: 1,
  },
  {
    name: "Sophia White",
    notification: "joined your group",
    image: LoginImg,
    time: "2 hours 15 mins ago",
    state: 1,
  },
  {
    name: "Liam Wilson",
    notification: "commented on your post",
    image: Register,
    time: "2 hours 45 mins ago",
    state: 0,
  },
  {
    name: "Mia Johnson",
    notification: "changed her cover photo",
    image: LoginImg,
    time: "3 hours ago",
    state: 1,
  },
  {
    name: "Noah Davis",
    notification: "shared an event",
    image: Register,
    time: "3 hours 30 mins ago",
    state: 1,
  },
  {
    name: "Ava Martinez",
    notification: "mentioned you in a comment",
    image: LoginImg,
    time: "4 hours ago",
    state: 0,
  },
];

const Rightbar = () => {
  return (
    <div
      className="overflow-y-scroll overflow-x-hidden sticky top-[56px] h-[calc(100vh-56px)] scrollbar-hide"
      style={{ flex: 3 }}
    >
      <div className="container p-5 space-y-5">
        {/* first item */}
        <div className=" space-y-5 p-6 bg-white rounded-xl shadow-md">
          <span className="text-gray">Suggestions For You</span>
          {/* user-card */}
          {USER_MAP.slice(0, 2).map((user, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center gap-2.5 font-medium">
                <img
                  src={user.image}
                  alt="UserProfile"
                  className="w-[40px] h-[40px] rounded-full object-cover object-center"
                />
                <span className="text-sm">{user.name}</span>
              </div>
              <div className="flex items-center gap-2 text-white text-sm">
                <button className="bg-blue-500 py-1 rounded-lg px-3">
                  Follow
                </button>
                <button className="bg-red-500 py-1 rounded-lg px-3">
                  Dismiss
                </button>
              </div>
            </div>
          ))}
          {/* user-card */}
        </div>
        {/* second item */}
        <div className=" space-y-5 p-6 bg-white rounded-xl shadow-md">
          <span className="text-gray">Notifications</span>
          {/* user-card */}
          {USER_MAP.slice(0, 4).map((user, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center gap-2.5 font-medium">
                <img
                  src={user.image}
                  alt="UserProfile"
                  className="w-[40px] h-[40px] rounded-full object-cover object-center"
                />
                <p className="font-light text-sm text-gray-500">
                  <span className="font-medium text-black">{user.name}</span>{" "}
                  {user.notification}
                </p>
              </div>
              <span className="text-sm">{user.time}</span>
            </div>
          ))}

          {/* user-card */}
        </div>
        {/* third item */}
        <div className=" space-y-5 p-6 bg-white rounded-xl shadow-md">
          <span className="text-gray">Online Friends</span>
          {/* user-card */}
          {USER_MAP.map(
            (user, index) =>
              user.state == 1 && (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center gap-2.5 font-medium relative">
                    <img
                      src={user.image}
                      alt="UserProfile"
                      className="w-[40px] h-[40px] rounded-full object-cover object-center "
                    />
                    <div className="w-3 h-3 bg-green-500 rounded-full absolute top-0 left-[30px]" />
                    <span className="font-medium text-black">{user.name}</span>
                  </div>
                </div>
              )
          )}

          {/* user-card */}
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
