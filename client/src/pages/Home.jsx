import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto ">
        <h1 className="text-3xl font-bold lg:text-6xl">Welcome to Kalpna</h1>
        <p className="text-gray-500 text-xs sm:text-sm">
        शायरी की एक नई दुनिया, जहां हर अल्फाज़ एक जज़्बात है और हर कविता एक दास्तान। अपने विचारों को अपने शब्दों में ढालिए और दुनिया के दिल तक पहुँचाइए।
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          View all posts
        </Link>
      </div>
      <div className="p-5 bg-amber-100 dark:bg-slate-700">
        <CallToAction />
      </div>

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6"> 
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <div key={post._id} className="flex justify-center">
                  <PostCard post={post} />
                </div>
              ))}
            </div>

            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center" 
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
