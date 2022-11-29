import { useDropzone } from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useOutletContext } from "react-router-dom";
import DropzoneParagraph from "@/components/atoms/DropzoneParagraph";

import { PhotoContext } from "@/App";
import { useContext, useEffect } from "react";

const Dropzone = () => {
  const [handleError, isLocked] = useOutletContext();
  const navigate = useNavigate();
  const { photo, setPhoto } = useContext(PhotoContext);

  useEffect(() => {
    if (photo) {
      return navigate("/details");
    }
  }, [photo]);

  const handleDropzone = (acceptedFiles, rejectedFiles) => {
    // Check if there is any rejected file. If so, it means that files shouldn't be passed.
    if (rejectedFiles.length) {
      // Look for the reason of rejected files. If their count is more than one, handle given error.
      if (rejectedFiles.length > 1 || acceptedFiles.length) {
        handleError("More than one file was choosen.");
      } else {
        handleError("Wrong file type.");
      }
    } else {
      // console.log("Passed!", acceptedFiles);
      setPhoto(acceptedFiles[0]);
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
    disabled: isLocked,
    multiple: false,
  });

  return (
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
        } ${isLocked ? "cursor-normal" : "cursor-pointer"}`,
      })}
    >
      <input {...getInputProps()} />
      <FontAwesomeIcon icon={faUpload} className="text-2xl text-lightGray" />
      <DropzoneParagraph>
        Drag and drop image
        <br />
        or click to browse
      </DropzoneParagraph>
    </div>
  );
};

export default Dropzone;
