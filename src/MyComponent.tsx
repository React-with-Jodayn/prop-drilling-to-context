import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ButtonCompo from "./ButtonCompo";
type componentProps = {
  img1: string;
  img2: string;
  header: string;
  handelOnClickbtn: () => void;
  c: number;
};
export default function MyComponent({
  img1,
  img2,
  header,
  handelOnClickbtn,
  c,
}: componentProps) {
  return (
    <div>
      <h1>{header}</h1>
      <a href={img1} target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href={img2} target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <ButtonCompo handelOnClickbtn={handelOnClickbtn} c={c} />
    </div>
  );
}
