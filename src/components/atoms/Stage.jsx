const Stage = ({ children, isActive }) => (
  <div
    className={`h-[35px] w-[35px] rounded-full border-[3px] text-center text-lg font-normal leading-[31px] sm:h-[44px] sm:w-[44px] sm:text-xl sm:leading-[40px] md:h-[50px] md:w-[50px] md:text-2xl md:leading-[46px] ${
      isActive
        ? "border-primary text-primary"
        : "border-lightGray text-lightGray"
    }`}
  >
    {children}
  </div>
);

export default Stage;
