import { createContext } from "react";

type infoType = {
  handelOnClickbtn: () => void;
  c: number;
};
export const InfoContext = createContext<infoType>({
  handelOnClickbtn: () => {},
  c: 10,
});
