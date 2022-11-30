import React, { useState, useEffect, useContext } from "react";
import Logo from "@/components/atoms/Logo.jsx";
import Title from "@/components/atoms/Title";
import ContentContainer from "@/components/organisms/ContentContainer";
import Errors from "@/components/molecules/Errors";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Stages from "@/components/molecules/Stages";
// import { DataContext } from "@/App";

export const DataContext = React.createContext();

const Root = () => {
  const [photo, setPhoto] = useState();
  const [details, setDetails] = useState();
  const [errors, setErrors] = useState([]);
  const [isLocked, setIsLocked] = useState(false);
  // const { photo, details } = useContext(DataContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!photo) {
  //     navigate("/");
  //   } else if (!details) {
  //     navigate("/details");
  //   } else if (details) {
  //     navigate("/download");
  //   }
  // }, [photo, details]);

  const handleErrors = (...msg) => {
    setErrors([...errors, ...msg]);
    setIsLocked(true);
    setTimeout(() => {
      const newErrors = errors;
      newErrors.shift();
      setErrors(newErrors);
      setIsLocked(false);
    }, 5000);
  };

  return (
    <div className="flex min-h-[100vh] w-[100vw] flex-col items-center justify-center gap-[20px] bg-dimmedWhite p-[10px] sm:gap-[35px] md:gap-[50px]">
      <Logo />
      <Title>Wallpaper generator - are you ready to create one?</Title>
      <ContentContainer>
        <Stages />
        <DataContext.Provider
          value={{
            photo,
            setPhoto,
            details,
            setDetails,
          }}
        >
          <Outlet context={{ handleErrors, isLocked }} />
        </DataContext.Provider>
      </ContentContainer>
      {errors.length ? <Errors errors={errors} /> : null}
    </div>
  );
};

export default Root;
