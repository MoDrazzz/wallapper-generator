const Stage = ({ children, isActive }) => (
  <div
    className={`h-[50px] w-[50px] rounded-full border-[3px] text-center text-2xl leading-[46px] ${
      isActive
        ? "border-primary text-primary"
        : "border-lightGray text-lightGray"
    }`}
  >
    {children}
  </div>
);

export default Stage;
