import OutputCallendarItem from "@/components/atoms/OutputCallendarItem.jsx";
import useMonth from "@/hooks/useMonth";
import { useDataContext } from "@/components/DataProvider";

const OutputCallendarItems = () => {
  const {
    details: { monthIndex, year },
  } = useDataContext();
  const { previousMonthDays, monthDays } = useMonth(year, monthIndex);

  return (
    <div className={`flex justify-between text-center`}>
      {previousMonthDays.map((dayData, id) => (
        <OutputCallendarItem key={id} isPreviousMonth data={dayData} />
      ))}
      {monthDays.map((dayData, id) => (
        <OutputCallendarItem key={id} data={dayData} />
      ))}
    </div>
  );
};

export default OutputCallendarItems;
