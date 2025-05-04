import { Link } from "react-router-dom";
import { PostContext } from "./contexts/PostsContext";
import { useContext } from "react";

export default function Posts() {
  const posts = useContext(PostContext);
  const postsLists = posts.map((post, index) => {
    return (
      <Link to={`/PostDetails/${index + 1}`} key={index}>
        <div style={{ margin: "3px", border: "1px solid black" }}>
          <h1 className="bg-gradient-to-r from-amber-500    to-amber-950  text-slate-400">
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
