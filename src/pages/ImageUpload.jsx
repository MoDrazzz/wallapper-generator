import Stages from "@/components/molecules/Stages";
import Paragraph from "@/components/atoms/Paragraph";
import Dropzone from "@/components/molecules/Dropzone";

const ImageUpload = () => {
  return (
    <>
      <Paragraph>Step 1: Upload a photo.</Paragraph>
      <Dropzone />
    </>
  );
};

export default ImageUpload;
