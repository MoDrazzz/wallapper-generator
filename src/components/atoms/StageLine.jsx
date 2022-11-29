const StageLine = ({ isActive }) => (
  <div
    className={`h-[3px] w-[50px] ${isActive ? "bg-primary" : "bg-lightGray"}`}
  />
);

export default StageLine;
