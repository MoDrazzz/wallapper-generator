const Label = ({ name, label, getterFunction = () => {}, children }) => (
  <label
    className="text-secondary md:text-lg"
    htmlFor={name}
    {...getterFunction()}
  >
    {children ?? label}
  </label>
);

export default Label;
