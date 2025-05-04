import { useContext } from "react";
import { InfoContext } from "./contexts/InfoContext";

export default function ButtonCompo2() {
  const info = useContext(InfoContext);
  return (
    <div>
      <button onClick={info.handelOnClickbtn}>count is {info.c}</button>
    </div>
  );
}
