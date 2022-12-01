const Button = ({ disabled, classes, children }) => (
  <button
    type="submit"
    className={`h-[40px] w-[195px] cursor-pointer rounded-[5px] font-normal text-white ${
      disabled ? "bg-lightGray" : "bg-primary"
    } transition-[background-color] duration-300 ease-in-out ${classes ?? ""}`}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
