import { Field } from "formik";

const Input = ({ name, type, maxLength, min, max, placeholder }) => (
  <Field
    className="w-full rounded-[5px] border-[1px] border-secondary p-[5px] pl-[10px] text-secondary"
    name={name}
    type={type ?? "text"}
    maxLength={maxLength}
    min={min}
    max={max}
    placeholder={placeholder}
  />
);

export default Input;
