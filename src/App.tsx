import { useState } from "react";
import "./App.css";
import MyComponent from "./MyComponent";
import MyComponent2 from "./MyComponent2";
import { InfoContext } from "./contexts/InfoContext";
import { Route, Routes, Link } from "react-router-dom";
import Posts from "./Posts";
import PostDetails from "./PostDetails";
import { PostContext } from "./contexts/PostsContext";
import PostLayout from "./PostLayout";

function App() {
  const PostsList: { title: string; description: string }[] = [
    { title: "Title One", description: "qwertyuiop" },
    { title: "Title two", description: "description two asdfghjkl" },
    { title: "Title three", description: "description three asdfghjkl" },
    { title: "Title four", description: "description four asdfghjkl" },
    { title: "Title five", description: "description five asdfghjkl" },
  ];

  const [count, setCount] = useState(0);
  function handelOnClickbtn() {
    setCount(count + 1);
  }
  return (
    <PostContext.Provider value={PostsList}>
      <>
        <nav>
          <Link to="/useContextHook">useContext Hook</Link> |
          <Link to="/PropDrilling">Prop Drilling</Link> |{" "}
          <Link to="/">Home</Link>| <Link to="/scratch">scratch url</Link> |
          <Link to="/Posts">Posts</Link>{" "}
        </nav>
        <Routes>
          <Route path="/" element={<></>} />
          <Route
            path="/PropDrilling"
            element={
              <MyComponent
                img1="https://vite.dev"
                img2="https://vite.dev"
                header="this is the Header"
                handelOnClickbtn={handelOnClickbtn}
                c={count}
              />
            }
          />
          <Route
            path="/useContextHook"
            element={
              <InfoContext.Provider
                value={{ handelOnClickbtn: handelOnClickbtn, c: count }}
              >
                <MyComponent2
                  img1="https://vite.dev"
                  img2="https://vite.dev"
                  header="this is the Header"
                />
              </InfoContext.Provider>
            }
          />
          <Route path="/Posts">
            <Route index element={<Posts />} />
            <Route element={<PostLayout />}>
              <Route path="PostDetails/:postId" element={<PostDetails />} />
            </Route>
          </Route>
          <Route
            path="*"
            element={
              <>
                <h1>404 - Page Not Found</h1>
                <h3>
                  This page does not exist. Try going back to{" "}
                  <Link to="/">Home</Link>.
                </h3>
              </>
            }
          />
        </Routes>
      </>
    </PostContext.Provider>
  );
}

export default App;
