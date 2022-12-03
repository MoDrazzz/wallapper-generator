import { Form as FormikForm, Formik } from "formik";

import Label from "@/components/atoms/Label";
import Button from "@/components/atoms/Button";
import FormField from "@/components/molecules/FormField";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useDataContext } from "@/components/DataProvider";
import SelectField from "@/components/molecules/SelectField";
import months from "@/data/months";
import { useState } from "react";

const Form = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const selectInitialValue = months[now.getMonth() + 1] || months[0];

  const { handleErrors, isLocked } = useOutletContext();
  const { setDetails } = useDataContext();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    setDetails(values);
    navigate("/download");
  };

  return (
    <Formik
      initialValues={{
        monthName: selectInitialValue,
        monthIndex: months.indexOf(selectInitialValue),
        year: selectInitialValue == "January" ? currentYear + 1 : currentYear,
        wallpaperName: "PL-VACC_Wallpaper",
        authors: [],
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

        if (!values.authors.length) {
          errors.push(`You have to specify author(s).`);
        }

        if (errors.length) {
          handleErrors(...errors);
        }

        return errors;
      }}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => (
        <FormikForm
          className="flex flex-1 flex-col items-end gap-[20px]"
          noValidate={true}
        >
          <div className="grid w-full grid-cols-[125px,_1fr] gap-[20px] sm:grid-cols-2">
            <SelectField
              initialValue={selectInitialValue}
              // setSelectValue={setSelectValue}
              setFieldValue={setFieldValue}
            />
            <FormField
              label="Year"
              name="year"
              type="number"
              min={currentYear}
              max={currentYear + 1}
            />
          </div>
          <FormField
            label="Wallpaper Name"
            name="wallpaperName"
            maxLength="30"
            placeholder="Specify wallpaper name..."
          />
          <FormField
            label="Authors"
            info="max 2"
            name="authors"
            type="tag"
            maxLength="2"
            setFieldValue={setFieldValue}
            placeholder="Specify authors... (separate each by comma)"
          />
          <Button type="submit" disabled={isLocked} classes="mt-auto">
            Generate
          </Button>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
