import { useRef } from "react";
import html2canvas from "html2canvas";

import Output from "./Output.jsx";

const Root = () => {
  const outputRef = useRef();

  const saveImage = async (e) => {
    e.target.innerHTML = "Loading";

    const output16x9 = await html2canvas(outputRef.current, {
      width: 1920,
      height: 1080,
      windowWidth: 1920,
      windowHeight: 1080,
      scale: 1,
    }).then((result) => result.toDataURL("image/png"));

    const output16x10 = await html2canvas(outputRef.current, {
      width: 1728,
      height: 1080,
      windowWidth: 1728,
      windowHeight: 1080,
      scale: 1,
    }).then((result) => result.toDataURL("image/png"));

    const anchor = document.createElement("a");
    anchor.setAttribute("download", "PLVACC_Tapeta_16x9.png");
    anchor.setAttribute("href", output16x9);
    anchor.click();
    anchor.setAttribute("download", "PLVACC_Tapeta_16x10.png");
    anchor.setAttribute("href", output16x10);
    anchor.click();

    e.target.innerHTML = "Click me";
  };

  return (
    <>
      <button
        className="absolute top-3 left-3 rounded-lg bg-indigo-600 px-3 py-2 text-white"
        onClick={saveImage}
      >
        Click me!
      </button>
      <Output outputRef={outputRef} />
    </>
  );
};

export default Root;
