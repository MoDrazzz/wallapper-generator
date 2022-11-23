import useData from "@/hooks/useData.jsx";
import OutputCallendarItem from "@/components/atoms/OutputCallendarItem.jsx";

const Callendar = ({ yearData, monthIndexData }) => {
  const { previousMonthDays, monthDays } = useData(yearData, monthIndexData);

  return (
    <div className={`flex justify-between text-center`}>
      {previousMonthDays.map((dayData, id) => (
        <OutputCallendarItem
          key={id}
          className="text-[#444444]"
          data={dayData}
        />
      ))}
      {monthDays.map((dayData, id) => (
        <OutputCallendarItem key={id} data={dayData} />
      ))}
    </div>
  );
};

export default Callendar;
