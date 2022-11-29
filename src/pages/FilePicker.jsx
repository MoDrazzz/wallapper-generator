import { useDropzone } from "react-dropzone";
import { PhotoContext } from "@/App";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";

const FilePicker = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
  });

  const { setPhoto } = useContext(PhotoContext);

  useEffect(() => {
    // console.log(acceptedFiles);
    if (acceptedFiles.length) {
      console.log("I work");
      setPhoto(acceptedFiles);
    }
  }, [acceptedFiles]);

  // console.log();

  return (
    <>
      <div
        className="h-[10vh] border-2 border-dashed border-red-400 bg-slate-300"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <p>Siemanko!</p>
      </div>
      <div>
        <Link to="/form">Go to form</Link>
      </div>
    </>
  );
};

export default FilePicker;
