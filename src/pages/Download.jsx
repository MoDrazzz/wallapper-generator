import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useRender from "@/hooks/useRender";
import { useDataContext } from "@/components/DataProvider";
import Output from "@/components/organisms/Output";
import Paragraph from "@/components/atoms/Paragraph";

const Download = () => {
  const [canvas, setCanvas] = useState();
  const { photo } = useDataContext();
  const navigate = useNavigate();

  const outputRef = useRef();
  const { renderWallpapers } = useRender(outputRef);

  useEffect(() => {
    if (!photo) {
      return navigate("/");
    }
    document.querySelector("#outputPhoto").style.backgroundImage = `url(${
      photo && URL.createObjectURL(photo)
    })`;
    renderWallpapers(outputRef).then((res) => {
      setCanvas(res);
    });
  }, []);

  return (
    <>
      <Paragraph>Step 3: Download the wallpaper.</Paragraph>
      <img src={canvas} alt="" />
      <Output outputRef={outputRef} />
    </>
  );
};

export default Download;
