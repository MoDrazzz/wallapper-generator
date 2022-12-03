import Input from "@/components/atoms/Input";
import Label from "@/components/atoms/Label";
import TagInput from "@/components/atoms/TagInput";

const FormField = ({
  name,
  label,
  type,
  maxLength,
  min,
  max,
  info,
  setFieldValue,
  placeholder,
}) => (
  <div className="w-full">
    <Label name={name} label={label} info={info} />
    {type == "tag" ? (
      <TagInput
        name={name}
        maxLength={maxLength}
        placeholder={placeholder}
        setFieldValue={setFieldValue}
      />
    ) : (
      <Input
        name={name}
        type={type}
        maxLength={maxLength}
        min={min}
        max={max}
        placeholder={placeholder}
      />
    )}
  </div>
);

export default FormField;
