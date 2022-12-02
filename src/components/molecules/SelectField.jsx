import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useSelect } from "downshift";
import months from "@/data/months";

import Label from "@/components/atoms/Label";

const SelectField = ({ initialValue, setFieldValue }) => {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    initialSelectedItem: initialValue,
    items: months,
    onSelectedItemChange: (item) => {
      setFieldValue("monthName", item.selectedItem);
      setFieldValue("monthIndex", months.indexOf(item.selectedItem));
    },
  });

  return (
    <div className="relative mb-[20px] w-full">
      <Label
        isDownshiftLabel
        getterFunction={() =>
          getLabelProps({
            className: "text-secondary md:text-lg",
          })
        }
      >
        Month
      </Label>
      <button
        {...getToggleButtonProps({
          type: "button",
          className: `flex w-full cursor-pointer items-center justify-between rounded-[5px] border-[1px] border-secondary p-[5px] pl-[10px] text-secondary ${
            isOpen ? "rounded-b-none" : null
          }`,
        })}
      >
        {selectedItem}
        <FontAwesomeIcon icon={faAngleDown} />
      </button>
      <ul
        {...getMenuProps({
          className: `${
            isOpen ? "scale-y-1" : "scale-y-0"
          } absolute h-[150px] w-full origin-top overflow-y-auto border-[1px] border-t-0 border-secondary bg-white transition-[transform] duration-300 ease-in-out`,
        })}
      >
        {months.map((item, index) => (
          <li
            {...getItemProps({
              item,
              key: item,
              className: `cursor-pointer border-b-[1px] border-secondary px-[10px] py-[5px] last:border-b-0 ${
                item == selectedItem || highlightedIndex == index
                  ? "bg-dimmedWhite"
                  : null
              }`,
            })}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectField;
