import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import ReplyIcon from "@mui/icons-material/Reply";
import Comments from "./Comments";
import { useState } from "react";

const post = ({ post }) => {
  const liked = false;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [commentOpen, setcommentOpen] = useState(false);
  return (
    <div className="shadow-xl rounded-[20px] bg-white text-black dark:text-white dark:bg-[#222]">
      <div className="container p-5">
        <div className="flex items-center justify-between">
          <div className="flex gap-2.5 items-center">
            <img
              src={post.profilePicture}
              className="w-[40px] h-[40px] object-cover rounded-full"
              alt="profileImage"
            />
            <div className="flex flex-col">
              <Link to={`/profile/${post.userId}`}>
                <span className="font-normal ">{post.name}</span>
              </Link>
              <span className="text-[12px]">1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="my-5">
          <p>{post.desc}</p>
          {post.img && (
            <img
              src={post.img}
              alt="postImage"
              className="w-[100%] max-h-[800px] object-center object-cover mt-5 rounded-lg"
            />
          )}
        </div>
        <div className="flex justify-between">
          <div
            className={` ${
              liked ? " text-red-500" : `text-black dark:text-white`
            } flex items-center cursor-pointer gap-2.5 text-[14px]`}
          >
            {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            12 Likes
          </div>
          <div
            className="flex items-center cursor-pointer gap-2.5 text-[14px]"
            onClick={() => {
              setcommentOpen(!commentOpen);
            }}
          >
            <InsertCommentIcon />1 Comment
          </div>
          <div className="flex items-center cursor-pointer gap-2.5 text-[14px]">
            <ReplyIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default post;
