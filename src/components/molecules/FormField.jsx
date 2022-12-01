import Input from "@/components/atoms/Input";
import Label from "@/components/atoms/Label";

const FormField = ({ name, label, type, maxLength, min, max }) => (
  <div className="mb-[20px] w-full">
    <Label name={name} label={label} />
    <Input name={name} type={type} maxLength={maxLength} min={min} max={max} />
  </div>
);

export default FormField;
