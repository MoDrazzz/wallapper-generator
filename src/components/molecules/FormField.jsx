import Input from "@/components/atoms/Input";
import TagInput from "@/components/atoms/TagInput";
import Label from "@/components/atoms/Label";

const FormField = ({
  name,
  label,
  type,
  maxLength,
  min,
  max,
  info,
  setFieldValue,
}) => (
  <div className="mb-[20px] w-full">
    <Label name={name} label={label} info={info} />
    {type == "tag" ? (
      <TagInput
        name={name}
        maxLength={maxLength}
        setFieldValue={setFieldValue}
      />
    ) : (
      <Input
        name={name}
        type={type}
        maxLength={maxLength}
        min={min}
        max={max}
      />
    )}
  </div>
);

export default FormField;
