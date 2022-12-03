const Button = ({ type, disabled, classes, children, onClick }) => (
  <button
    type={type ?? "button"}
    className={`h-[40px] w-[195px] cursor-pointer rounded-[5px] font-normal text-white ${
      disabled ? "bg-lightGray" : "bg-primary"
    } transition-[background-color] duration-300 ease-in-out ${classes ?? ""}`}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
