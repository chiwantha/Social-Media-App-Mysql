import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  const COMMENTS = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "John Doe",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Jane Doe",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between gap-5 my-[20px]">
        <img
          className="w-[40px] h-[40px] object-cover rounded-full"
          src={currentUser.profilePicture}
          alt=""
        />
        <input
          style={{ flex: 5 }}
          className=" p-[7px] bg-transparent border border-neutral-500 focus:border-blue-300 outline-none rounded-2xl"
          type="text"
          placeholder="write a comment ..."
        />
        <button className="border-none bg-blue-500 py-[7px] px-2 text-white cursor-pointer rounded-2xl">
          Sent
        </button>
      </div>
      {COMMENTS.map((item, index) => (
        <div className="my-4 flex justify-between gap-5" key={index}>
          <img
            src={item.profilePicture}
            alt=""
            className="w-[40px] h-[40px] object-cover rounded-full"
          />
          <div
            className="flex flex-col gap-1 justify-start"
            style={{ flex: 5 }}
          >
            <span className="font-medium">{item.name}</span>
            <p className="text-black dark:text-neutral-300">{item.desc}</p>
            <hr className="my-2.5 border-neutral-200 dark:border-neutral-700" />
          </div>
          <span
            style={{ flex: 1 }}
            className="self-center dark:text-gray-300 text-black"
          >
            1 hour ago
          </span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
