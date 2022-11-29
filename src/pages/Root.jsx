import Logo from "@/components/atoms/Logo.jsx";
import { useDropzone } from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Root = () => {
  const [errors, setErrors] = useState([]);
  const [locked, setLocked] = useState(false);

  const handleDropzone = (files) => {
    if (files.length > 1) {
      setErrors([...errors, "More than one file was choosen."]);
      setLocked(true);
      setTimeout(() => {
        const newErrors = errors;
        newErrors.shift();
        setErrors(newErrors);
        setLocked(false);
      }, 5000);
    } else {
      console.log("Passed!", files);
      setErrors(["passed"]);
    }
  };

  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    onDrop: handleDropzone,
    disabled: locked,
  });

  return (
    <div className="flex h-[100vh] w-[100vw] flex-col items-center justify-center gap-[50px] bg-dimmedWhite">
      <Logo />
      <h1 className="text-2xl text-secondary">
        Wallpaper generator - are you ready to create one?
      </h1>
      <main>
        <div className="flex h-[600px] w-[500px] flex-col gap-[20px] rounded-[20px] bg-white p-[50px]">
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
              className: `flex h-full w-full flex-col items-center justify-center gap-[10px] rounded-[20px] border-2 border-dashed ${
                isDragAccept
                  ? "border-green-500"
                  : isDragReject
                  ? "border-primary"
                  : "border-lightGray"
              } bg-dimmedWhite`,
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
