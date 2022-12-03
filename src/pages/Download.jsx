import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "@/components/DataProvider";
import Output from "@/components/organisms/Output";
import Paragraph from "@/components/atoms/Paragraph";
import LoadingScreen from "@/components/molecules/LoadingScreen";

import html2canvas from "html2canvas";
import Button from "@/components/atoms/Button";

const renderWallpaper = async (scale = 1, aspectRatio = "16x9") => {
  const height = aspectRatio == "16x10" ? 1200 : 1080;

  const generatedWallpaper = await html2canvas(
    document.querySelector("#exportContainer"),
    {
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
    }
  ).then((result) => result.toDataURL("image/png"));

  return {
    render: generatedWallpaper,
    scale,
    aspectRatio,
  };
};

const renderWallpapers = async () => {
  // Full HD 16x9 STANDARD
  const output16x9 = await renderWallpaper();
  // Full HD 16x10
  const output16x10 = await renderWallpaper(1, "16x10");
  // 4k 16x9
  const output4k = await renderWallpaper(2);

  return [output16x9, output16x10, output4k];
};

const Download = () => {
  const [renderedWallpapers, setRenderedWallpapers] = useState();
  const { photo, details } = useDataContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!photo) {
      return navigate("/");
    }
    document.querySelector("#outputPhoto").style.backgroundImage = `url(${
      photo && URL.createObjectURL(photo)
    })`;
    const setRenders = async () => {
      const renders = await renderWallpapers(details.wallpaperName);
      setRenderedWallpapers(renders);
    };
    setRenders();
  }, []);

  const handleDownload = () => {
    const anchor = document.createElement("a");
    for (let i in renderedWallpapers) {
      anchor.setAttribute(
        "download",
        `${details.wallpaperName}_${renderedWallpapers[i].aspectRatio}_${
          renderedWallpapers[i].scale * 2
        }k.png`
      );
      anchor.setAttribute("href", renderedWallpapers[i].render);
      anchor.click();
    }
  };

  return (
    <>
      {renderedWallpapers ? (
        <>
          <Paragraph>Step 3: Download the wallpaper.</Paragraph>
          <div>
            <Paragraph>Output:</Paragraph>
            <img src={renderedWallpapers[0].render} alt="Rendered Wallpaper" />
          </div>
          <Button classes="m-auto" onClick={handleDownload}>
            Download
          </Button>
        </>
      ) : (
        <LoadingScreen text="Generating" />
      )}
      {photo && <Output />}
    </>
  );
};

export default Download;
