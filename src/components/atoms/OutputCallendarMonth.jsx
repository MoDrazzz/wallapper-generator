import useData from "@/hooks/useData.jsx";

const OutputCallendarMonth = ({ yearData, monthIndexData }) => {
  const { monthName, year } = useData(yearData, monthIndexData);

  return (
    <p className="col-span-full text-base tracking-wide [word-spacing:25px]">
      {monthName} <span className="font-light">/ {year}</span>
    </p>
  );
};

export default OutputCallendarMonth;
