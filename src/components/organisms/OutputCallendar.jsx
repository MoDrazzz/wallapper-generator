import OutputCallendarMonth from "@/components/atoms/OutputCallendarMonth.jsx";
import OutputCallendarAuthors from "@/components/atoms/OutputCallendarAuthors.jsx";
import Logo from "@/components/atoms/Logo.jsx";
import OutputCallendarItems from "@/components/molecules/OutputCallendarItems.jsx";

const OutputCallendar = () => (
  <div className="grid grid-cols-[65vw_min-content_1fr] grid-rows-[repeat(2,min-content)] items-center gap-x-[60px] gap-y-[30px] bg-gradient-to-t from-black via-[#000000_5%] to-transparent bg-[bottom_1px_center] bg-no-repeat px-[100px] py-[85px] text-white">
    <OutputCallendarMonth />
    <OutputCallendarItems />
    <OutputCallendarAuthors />
    <Logo isWhite />
  </div>
);

export default OutputCallendar;
