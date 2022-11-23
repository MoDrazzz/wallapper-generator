import useData from "@/hooks/useData.jsx";

const OutputCallendarMonth = ({ yearData, monthIndexData }) => {
  const { monthName, year } = useData(yearData, monthIndexData);

  return (
    <p className="col-span-full [word-spacing:25px]">
      {monthName} / {year}
    </p>
  );
};

export default OutputCallendarMonth;
