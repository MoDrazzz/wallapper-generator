import { useDataContext } from "@/components/DataProvider";
import useMonth from "@/hooks/useMonth";

const OutputCallendarMonth = () => {
  const {
    details: { monthIndex, year },
  } = useDataContext();
  const { monthName } = useMonth(year, monthIndex);

  return (
    <p className="col-span-full text-base tracking-wide [word-spacing:25px]">
      {monthName} <span className="font-light">/ {year}</span>
    </p>
  );
};

export default OutputCallendarMonth;
