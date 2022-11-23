const OutputCallendarItem = ({ data }) => (
  <div>
    <p className="text-sm">{data.dayName}</p>
    <p className="text-sm">{data.dayNumber}</p>
  </div>
);

export default OutputCallendarItem;
