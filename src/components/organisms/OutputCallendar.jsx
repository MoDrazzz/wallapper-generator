import OutputCallendarMonth from "@/components/atoms/OutputCallendarMonth.jsx";
import OutputCallendarAuthors from "@/components/atoms/OutputCallendarAuthors.jsx";
import Logo from "@/components/atoms/Logo.jsx";
import OutputCallendarItems from "@/components/molecules/OutputCallendarItems.jsx";

import { yearData, monthIndexData } from "@/data/mockFormData.jsx";

const OutputCallendar = () => (
  <div className="grid grid-cols-[65vw_min-content_1fr] grid-rows-[repeat(2,min-content)] items-center gap-x-[60px] gap-y-[30px] bg-gradient-to-t from-black via-[#000000_10%] to-transparent px-[100px] py-[85px] text-white">
    <OutputCallendarMonth yearData={yearData} monthIndexData={monthIndexData} />
    <OutputCallendarItems yearData={yearData} monthIndexData={monthIndexData} />
    <OutputCallendarAuthors />
    <Logo />
  </div>
);

export default OutputCallendar;
