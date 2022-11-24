const OutputCallendarItem = ({ isPreviousMonth, data }) => (
  <div
    className={
      isPreviousMonth
        ? "text-zinc-700"
        : data.isWeekend
        ? "text-zinc-400"
        : null
    }
  >
    <p className="mb-[10px] text-[0.85rem] font-light tracking-wide">
      {data.dayName}
    </p>
    <p className="text-[0.98rem] font-light tracking-wide">{data.dayNumber}</p>
  </div>
);

export default OutputCallendarItem;
