import OutputCallendar from "@/components/organisms/OutputCallendar.jsx";
import { useContext, useEffect } from "react";
import { OutputContext } from "@/App";
import { PhotoContext } from "@/App";

const Output = () => {
  const outputRef = useContext(OutputContext);
  const { photo } = useContext(PhotoContext);

  useEffect(() => {
    document.querySelector(
      "#outputPhoto"
    ).style.backgroundImage = `url(${URL.createObjectURL(photo[0])})`;
  }, []);

  // bg-[url("${URL.createObjectURL(
  // photo[0]
  // )}.jpeg")]

  return (
    <div ref={outputRef} className="hidden">
      <div
        className={`flex h-[100vh] flex-col justify-end bg-cover bg-center`}
        id="outputPhoto"
      >
        <OutputCallendar />
      </div>
    </div>
  );
};

export default Output;
