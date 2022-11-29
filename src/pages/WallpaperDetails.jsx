import Paragraph from "@/components/atoms/Paragraph";
import { PhotoContext } from "@/App";
import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";

const WallpaperDetails = () => {
  const { photo } = useContext(PhotoContext);

  if (!photo) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Paragraph>Step 2: Enter the details.</Paragraph>
    </>
  );
};

export default WallpaperDetails;
