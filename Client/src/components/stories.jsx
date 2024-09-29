import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import Img1 from "../assets/SampleImg/1.jpg";
import Img2 from "../assets/SampleImg/3.jpg";
import Img3 from "../assets/SampleImg/4.jpg";
import Img4 from "../assets/SampleImg/5.jpg";

export const STORIES = [
  {
    id: 1,
    name: "Kasun Chiwantha",
    img: Img1,
  },
  {
    id: 2,
    name: "Kasun Chiwantha",
    img: Img2,
  },
  {
    id: 3,
    name: "Kasun Chiwantha",
    img: Img3,
  },
  {
    id: 4,
    name: "Kasun Chiwantha",
    img: Img4,
  },
];

const stories = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="flex gap-2.5 h-[250px] text-white text-sm font-medium">
      <div className="flex-1 rounded-xl overflow-hidden relative">
        <img
          src={`/${currentUser.image}`}
          alt="stoyImage"
          className="w-[100%] h-[100%] object-cover"
        />
        <span className="absolute bottom-2.5 left-2.5">{currentUser.name}</span>
        <button className="absolute bottom-[40px] left-2.5 flex items-center justify-center text-2xl  bg-blue-500 rounded-full w-[30px] h-[30px] cursor-pointer">
          <span className="mt-[-6px]">+</span>
        </button>
      </div>
      {STORIES.map((story) => (
        <div
          className="flex-1 rounded-xl overflow-hidden relative"
          key={story.id}
        >
          <img
            src={story.img}
            alt="stoyImage"
            className="w-[100%] h-[100%] object-cover "
          />
          <span className="absolute bottom-2.5 left-2.5">{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default stories;
