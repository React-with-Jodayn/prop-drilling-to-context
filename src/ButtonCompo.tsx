export default function ButtonCompo({
  handelOnClickbtn,
  c,
}: {
  handelOnClickbtn: () => void;
  c: number;
}) {
  return (
    <div>
      <button onClick={handelOnClickbtn}>count is {c}</button>
    </div>
  );
}
