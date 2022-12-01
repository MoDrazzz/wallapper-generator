import Paragraph from "@/components/atoms/Paragraph";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "@/components/DataProvider";
import { useEffect } from "react";
import Form from "@/components/organisms/Form";

const Details = () => {
  const navigate = useNavigate();
  const { photo } = useDataContext();

  useEffect(() => {
    if (!photo) {
      navigate("/");
    }
  }, [photo]);

  return (
    <>
      <Paragraph>Step 2: Enter the details.</Paragraph>
      <Form />
    </>
  );
};

export default Details;
