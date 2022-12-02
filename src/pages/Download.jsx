import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "@/components/DataProvider";
import Output from "@/components/organisms/Output";
import Paragraph from "@/components/atoms/Paragraph";

import html2canvas from "html2canvas";

const renderWallpaper = async (
  scale = 1,
  aspectRatio = "16x9",
  wallpaperName
) => {
  const height = aspectRatio == "16x10" ? 1200 : 1080;

  const output = await html2canvas(document.querySelector("#exportContainer"), {
    width: 1920,
    height,
    windowWidth: 1920,
    windowHeight: height,
    scale,
    useCORS: true,
    onclone: (doc) => {
      const elementToRender = doc.querySelector("#exportContainer");
      elementToRender.classList.remove("hidden");
      elementToRender.style.position = "absolute";
      elementToRender.style.left = 0;
      elementToRender.style.top = 0;
    },
  }).then((result) => result.toDataURL("image/png"));

  const anchor = document.createElement("a");
  anchor.setAttribute(
    "download",
    `${wallpaperName}_${aspectRatio}_${scale * 2}k.png`
  );
  anchor.setAttribute("href", output);
  anchor.click();

  return output;
};

const renderWallpapers = (wallpaperName) => {
  // Full HD 16x9 STANDARD
  const output = renderWallpaper(1, "16x9", wallpaperName);
  // Full HD 16x10
  renderWallpaper(1, "16x10", wallpaperName);
  // 4k 16x9
  renderWallpaper(2, "16x9", wallpaperName);

  return output;
};

const Download = () => {
  const [renderedImage, setRenderedImage] = useState();
  const {
    photo,
    details: { wallpaperName },
  } = useDataContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!photo) {
      return navigate("/");
    }
    document.querySelector("#outputPhoto").style.backgroundImage = `url(${
      photo && URL.createObjectURL(photo)
    })`;
    renderWallpapers(wallpaperName).then((res) => {
      setRenderedImage(res);
    });
  }, []);

  return (
    <>
      <Paragraph>Step 3: Download the wallpaper.</Paragraph>
      <img src={renderedImage} alt="" />
      {photo ? <Output /> : null}
    </>
  );
};

export default Download;
