import { createContext } from "react";
type PostsList = {
  title: string;
  description: string;
};

export const PostContext = createContext<PostsList[]>([]);
