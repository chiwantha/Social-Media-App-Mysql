import { makeRequest } from "../axios";
import Post from "./Post";
import { useQuery } from "@tanstack/react-query";

const Posts = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      try {
        const res = await makeRequest.get("/posts");
        return res.data;
      } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch posts");
      }
    },
  });

  console.log(data);

  if (error) {
    return <div>Error: {error.message}</div>; // Handle errors
  }

  return (
    <div className="flex flex-col gap-[50px]">
      {error ? (
        <div>Error: {error.message}</div>
      ) : isLoading ? (
        "Loading ..."
      ) : (
        data && data.map((post, index) => <Post key={index} post={post} />)
      )}
    </div>
  );
};

export default Posts;
