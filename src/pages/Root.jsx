import { useState, useEffect } from "react";
import Logo from "@/components/atoms/Logo.jsx";
import Title from "@/components/atoms/Title";
import ContentContainer from "@/components/organisms/ContentContainer";
import Errors from "@/components/molecules/Errors";
import { Outlet } from "react-router-dom";
import Stages from "@/components/molecules/Stages";

const Root = () => {
  const [errors, setErrors] = useState([]);
  const [isLocked, setIsLocked] = useState(false);

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
        <Outlet context={{ handleErrors, isLocked }} />
      </ContentContainer>
      {errors.length ? <Errors errors={errors} /> : null}
    </div>
  );
};

export default Root;
