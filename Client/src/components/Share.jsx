import Image from "../assets/leftbar/img.png";
import Map from "../assets/leftbar/map.png";
import Friend from "../assets/leftbar/friend.png";
import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../axios";

const Share = () => {
  const { currentUser } = useContext(AuthContext);
  //   const [file, setfile] = useState(null);
  const [desc, setdesc] = useState("");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["addPost"],
    mutationFn: async (addNew) => {
      return makeRequest.post("/posts", addNew);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });

  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({ desc });
  };

  return (
    <div className="share shadow-md rounded-2xl mb-5 bg-white dark:bg-gray-800 dark:text-white">
      <div className="container p-5">
        <div className="top flex items-center gap-5">
          <img
            src={currentUser.profilePicture}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
          <input
            type="text"
            placeholder={`What's on your mind ${currentUser.name}?`}
            className="border-none outline-none p-5 w-3/5 bg-transparent text-black dark:text-white"
            onChange={(e) => {
              setdesc(e.target.value);
            }}
          />
        </div>
        <hr className="my-5 border-t-0.5 dark:border-gray-600" />
        <div className="bottom flex items-center justify-between">
          <div className="left flex items-center gap-5">
            <label htmlFor="file" className="cursor-pointer">
              <div className="item flex items-center gap-2">
                <img src={Image} alt="" className="h-5" />
                <span className="text-sm text-gray-500">Add Image</span>
              </div>
              <input
                type="file"
                id="file"
                className="hidden"
                onChange={(e) => {
                  setdesc(e.target.files[0]);
                }}
              />
            </label>
            <div className="item flex items-center gap-2 cursor-pointer">
              <img src={Map} alt="" className="h-5" />
              <span className="text-sm text-gray-500">Add Place</span>
            </div>
            <div className="item flex items-center gap-2 cursor-pointer">
              <img src={Friend} alt="" className="h-5" />
              <span className="text-sm text-gray-500">Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button
              onClick={handleClick}
              className="bg-blue-600 text-white px-4 py-1 rounded-md"
            >
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
