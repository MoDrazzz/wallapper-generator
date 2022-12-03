import { useDataContext } from "@/components/DataProvider";
import { Fragment } from "react";

const OutputCallendarAuthors = () => {
  const {
    details: { authors },
  } = useDataContext();

  return (
    <p className="min-w-max text-center text-[0.97rem] font-light leading-snug tracking-wide">
      foto
      {authors.map((author, id) => (
        <Fragment key={id}>
          <br />
          {author}
        </Fragment>
      ))}
    </p>
  );
};

export default OutputCallendarAuthors;
