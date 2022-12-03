import Paragraph from "@/components/atoms/Paragraph";
import { useDataContext } from "@/components/DataProvider";
import Form from "@/components/organisms/Form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
