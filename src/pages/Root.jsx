import Logo from "@/components/atoms/Logo.jsx";
import { useDropzone } from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Root = () => {
  const [errors, setErrors] = useState([]);
  const [locked, setLocked] = useState(false);

  const handleError = (msg) => {
    setErrors([...errors, msg]);
    setLocked(true);
    setTimeout(() => {
      const newErrors = errors;
      newErrors.shift();
      setErrors(newErrors);
      setLocked(false);
    }, 5000);
  };

  const handleDropzone = (acceptedFiles, rejectedFiles) => {
    if (rejectedFiles.length) {
      if (rejectedFiles.length > 1 || acceptedFiles.length) {
        handleError("More than one file was choosen.");
      } else {
        handleError("Wrong file type.");
      }
    } else {
      console.log("Passed!", acceptedFiles);
    }
  };

  const {
    getRootProps,
    getInputProps,
    isDragAccept,
    isDragReject,
    isFileDialogActive,
  } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    onDrop: handleDropzone,
    disabled: locked,
    multiple: false,
  });

  return (
    <div className="flex min-h-[100vh] w-[100vw] flex-col items-center justify-center gap-[20px] bg-dimmedWhite p-[10px] sm:gap-[35px] md:gap-[50px]">
      <Logo />
      <h1 className="text-center text-base text-secondary sm:text-lg md:text-xl lg:text-2xl">
        Wallpaper generator - are you ready to create one?
      </h1>
      <main className="flex min-h-[55vh] w-full min-w-min max-w-[500px] flex-col gap-[20px] rounded-[20px] bg-white p-[30px] sm:p-[40px] md:p-[50px]">
        <div className="mx-auto flex items-center">
          <div className="h-[50px] w-[50px] rounded-full border-[3px] border-primary text-center text-2xl leading-[46px] text-primary">
            1
          </div>
          <div className="h-[3px] w-[50px] bg-lightGray" />
          <div className="h-[50px] w-[50px] rounded-full border-[3px] border-lightGray text-center text-2xl leading-[46px] text-lightGray">
            2
          </div>
          <div className="h-[3px] w-[50px] bg-lightGray" />
          <div className="h-[50px] w-[50px] rounded-full border-[3px] border-lightGray text-center text-2xl leading-[46px] text-lightGray">
            3
          </div>
        </div>
        <p className="text-base text-secondary">Step 1: Upload a photo.</p>
        <div
          {...getRootProps({
            className: `bg-dimmedWhite transition-[border-color] duration-500 ease-in-out flex py-[40px] flex-1 w-full flex-col items-center justify-center gap-[10px] rounded-[20px] border-2 border-dashed ${
              isDragAccept
                ? "border-green-500"
                : isDragReject
                ? "border-primary"
                : isFileDialogActive
                ? "border-secondary"
                : "border-lightGray"
            }`,
          })}
        >
          <input {...getInputProps()} />
          <FontAwesomeIcon
            icon={faUpload}
            className="text-2xl text-lightGray"
          />
          <p className="text-center text-lightGray">
            Drag and drop image
            <br />
            or click to browse
          </p>
        </div>
      </main>
      {errors.length ? (
        <div className="absolute bottom-[30px] right-[30px] translate-x-[calc(100%_+_30px)] animate-slideInOut">
          {errors.map((message, id) => (
            <div
              className="min-w-[40vw] rounded-[10px] bg-primary p-[15px] text-2xl text-white"
              key={id}
            >
              {message}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Root;
