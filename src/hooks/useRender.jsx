import html2canvas from "html2canvas";

const useRender = (elemRef) => {
  const renderWallpaper = async (scale = 1, aspectRatio = "16x9") => {
    const height = aspectRatio == "16x10" ? 1200 : 1080;

    const output = await html2canvas(elemRef.current, {
      width: 1920,
      height,
      windowWidth: 1920,
      windowHeight: height,
      scale,
      onclone: (doc) => {
        const elem = doc.querySelector("#exportContainer");
        elem.classList.remove("hidden");
        elem.style.position = "absolute";
        elem.style.left = 0;
        elem.style.top = 0;
      },
    }).then((result) => result.toDataURL("image/png"));

    // const anchor = document.createElement("a");
    // anchor.setAttribute(
    //   "download",
    //   `PLVACC_Tapeta_${aspectRatio}_${scale * 2}k.png`
    // );
    // anchor.setAttribute("href", output);
    // anchor.click();

    return output;
  };

  const renderWallpapers = async () => {
    // Full HD 16x9 STANDARD
    const output = renderWallpaper();
    // Full HD 16x10
    renderWallpaper(1, "16x10");
    // 4k 16x9
    renderWallpaper(2);

    return output;
  };

  return { renderWallpapers };
};

export default useRender;
