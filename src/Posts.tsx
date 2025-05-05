import { Link } from "react-router-dom";
import { PostContext } from "./contexts/PostsContext";
import { useContext } from "react";

export default function Posts() {
  const posts = useContext(PostContext);
  const postsLists = posts.map((post, index) => {
    return (
      <Link to={`PostDetails/${index + 1}`} key={index}>
        <div className="hover:w-full p-1">
          <h1
            className="bg-gradient-to-r from-amber-500 to-amber-950 text-slate-400 rounded-full  border-1 border-solid shadow-2xs shadow-amber-500 
            hover:shadow-2xl hover:text-black gap-  transition-all duration-150 
"
          >
            {post.title}
          </h1>
        </div>
      </Link>
    );
  });
  return (
    <>
      <div>{postsLists}</div>
    </>
  );
}
