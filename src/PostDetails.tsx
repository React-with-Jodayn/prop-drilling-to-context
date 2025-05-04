import { PostContext } from "./contexts/PostsContext";
import { useParams } from "react-router-dom";
import { useContext } from "react";

export default function PostDetails() {
  const posts = useContext(PostContext);
  const { postId } = useParams();
  const post = posts.find((_, index) => {
    return index + 1 === Number(postId);
  });

  return (
    <>
      {post != null ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </>
      ) : (
        <p>Post {postId} not found.</p>
      )}
    </>
  );
}
