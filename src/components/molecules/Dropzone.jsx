import { useDropzone } from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useOutletContext } from "react-router-dom";
import DropzoneParagraph from "@/components/atoms/DropzoneParagraph";
import { flushSync } from "react-dom";
import { useDataContext } from "@/components/DataProvider";

const Dropzone = () => {
	const { handleErrors, isLocked } = useOutletContext();
	const navigate = useNavigate();
	const { photo, setPhoto } = useDataContext();

	// useEffect(() => {
	//   if (photo) {
	//     return navigate("/details");
	//   }
	// }, [photo]);

	const handleDropzone = (acceptedFiles, rejectedFiles) => {
		// Check if there is any rejected file. If so, it means that files shouldn't be passed.
		if (rejectedFiles.length) {
			// Look for the reason of rejected files. If their count is more than one, handle given error.
			if (rejectedFiles.length > 1 || acceptedFiles.length) {
				handleErrors("More than one file was choosen.");
			} else {
				handleErrors("Wrong file type.");
			}
		} else {
			flushSync(() => {
				setPhoto(acceptedFiles[0]);
			});
			navigate("/details");
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
				className: `bg-dimmedWhite transition-[border-color,_opacity] duration-500 ease-in-out flex py-[40px] flex-1 w-full flex-col items-center justify-center gap-[10px] rounded-[20px] border-2 border-dashed ${isDragAccept
						? "border-green-500"
						: isDragReject
							? "border-primary"
							: isFileDialogActive
								? "border-secondary"
								: "border-lightGray"
					} ${isLocked ? "cursor-normal opacity-[0.5]" : "cursor-pointer"}`,
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
