import Paragraph from "@/components/atoms/Paragraph";
import Dropzone from "@/components/molecules/Dropzone";

const Upload = () => {
  return (
    <>
      <Paragraph>Step 1: Upload a photo.</Paragraph>
      <Dropzone />
    </>
  );
};

export default Upload;
