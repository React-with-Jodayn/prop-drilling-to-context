import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ButtonCompo2 from "./ButtonCompo2";
type componentProps = {
  img1: string;
  img2: string;
  header: string;
};
export default function MyComponent2({ img1, img2, header }: componentProps) {
  return (
    <div className="bg-amber-600">
      <h1>{header}</h1>
      <a href={img1} target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href={img2} target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <ButtonCompo2 />
    </div>
  );
}
