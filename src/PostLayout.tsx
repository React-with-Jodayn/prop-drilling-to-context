import { Outlet } from "react-router-dom";
export default function PostLayout() {
  return (
    <>
      <div className="bg-emerald-900 w-full py-0.5 m-2">
        <h3 className="text-amber-100">This is the Header</h3>
      </div>
      <Outlet />
      <div className="bg-emerald-900 w-full py-0.5 m-2">
        <h3 className="text-amber-100">This is the Footer</h3>
      </div>
    </>
  );
}
