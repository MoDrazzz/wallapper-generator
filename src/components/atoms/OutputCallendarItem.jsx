const OutputCallendarItem = ({ isPreviousMonth, data }) => (
  <div className={isPreviousMonth ? "text-[#444444]" : null}>
    <p className="text-sm">{data.dayName}</p>
    <p className="text-sm">{data.dayNumber}</p>
  </div>
);

export default OutputCallendarItem;
