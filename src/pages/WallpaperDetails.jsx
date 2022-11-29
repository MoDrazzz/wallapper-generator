import Paragraph from "@/components/atoms/Paragraph";
import { PhotoContext } from "@/App";
import { useContext, useEffect } from "react";
import { Navigate, useOutletContext } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { useSelect } from "downshift";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const WallpaperDetails = () => {
  const now = new Date();
  const currentYear = now.getFullYear();

  const { handleErrors, isLocked } = useOutletContext();
  const { photo } = useContext(PhotoContext);

  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    initialSelectedItem: months[now.getMonth() + 1] || months[0],
    items: months,
  });

  // if (!photo) {
  //   return <Navigate to="/" />;
  // }

  return (
    <>
      <Paragraph>Step 2: Enter the details.</Paragraph>
      <Formik
        initialValues={{
          year: currentYear,
          wallpaperName: "PL-VACC_Wallpaper",
        }}
        validate={(values) => {
          const errors = [];

          if (values.year != currentYear && values.year != currentYear + 1) {
            errors.push(
              `Year must be either ${currentYear} or ${currentYear + 1}.`
            );
          }

          if (!values.wallpaperName.length) {
            errors.push("Wallpaper name has to be specified.");
          }

          if (errors.length) {
            handleErrors(...errors);
          }

          return errors;
        }}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={(values) => {
          values.month = months.indexOf(selectedItem);
          console.log(values);
        }}
      >
        <Form className="flex flex-col items-end" noValidate={true}>
          <div className="relative mb-[20px] w-full">
            <label
              {...getLabelProps({ className: "text-secondary md:text-lg" })}
            >
              Month
            </label>
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
            {/* <Field
              className="w-full rounded-[5px] border-[1px] border-secondary p-[5px] pl-[10px] text-secondary"
              name="month"
            /> */}
          </div>
          <div className="mb-[20px] w-full">
            <label className="text-secondary md:text-lg" htmlFor="year">
              Year
            </label>
            <Field
              className="w-full rounded-[5px] border-[1px] border-secondary p-[5px] pl-[10px] text-secondary"
              name="year"
              type="number"
              min={currentYear}
              max={currentYear + 1}
            />
          </div>
          <div className="mb-[20px] w-full">
            <label
              className="text-secondary md:text-lg"
              htmlFor="wallpaperName"
            >
              Wallpaper Name
            </label>
            <Field
              className="w-full rounded-[5px] border-[1px] border-secondary p-[5px] pl-[10px] text-secondary"
              name="wallpaperName"
              type="text"
              maxLength="30"
            />
          </div>
          <button
            type="submit"
            className="h-[40px] w-[195px] cursor-pointer rounded-[5px] bg-primary font-normal text-white"
            disabled={isLocked}
          >
            Generate
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default WallpaperDetails;
