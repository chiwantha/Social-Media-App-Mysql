import Stories from "../../components/stories";
import Posts from "../../components/posts";

const home = () => {
  return (
    <div className="dark:bg-[#555] bg-[#f6f3f3] dark:text-white py-5 px-16 space-y-5">
      {/* stories */}
      <Stories />
      {/* Posts */}
      <Posts />
    </div>
  );
};

export default home;
