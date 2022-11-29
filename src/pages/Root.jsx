import { useState } from "react";
import Logo from "@/components/atoms/Logo.jsx";
import Title from "@/components/atoms/Title";
import ContentContainer from "@/components/organisms/ContentContainer";
import Errors from "@/components/molecules/Errors";
import { Outlet } from "react-router-dom";

const Root = () => {
  const [errors, setErrors] = useState([]);
  const [isLocked, setIsLocked] = useState(false);

  const handleError = (msg) => {
    setErrors([...errors, msg]);
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
        <Outlet context={[handleError, isLocked]} />
      </ContentContainer>
      {errors.length ? <Errors errors={errors} /> : null}
    </div>
  );
};

export default Root;
