import Credits from "@/components/atoms/Credits";
import Logo from "@/components/atoms/Logo.jsx";
import Title from "@/components/atoms/Title";
import Errors from "@/components/molecules/Errors";
import Stages from "@/components/molecules/Stages";
import ContentContainer from "@/components/organisms/ContentContainer";
import { useState } from "react";
import { Outlet } from "react-router-dom";

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
    <div className="relative flex min-h-[100vh] w-[100vw] flex-col items-center justify-center gap-[20px] overflow-hidden bg-dimmedWhite p-[10px] sm:gap-[35px] md:gap-[50px]">
      <Logo />
      <Title>Wallpaper generator - are you ready to create one?</Title>
      <ContentContainer>
        <Stages />
        <Outlet context={{ handleErrors, isLocked }} />
      </ContentContainer>
      {errors.length ? <Errors errors={errors} /> : null}
      <Credits />
    </div>
  );
};

export default Root;
