import Error from "@/components/atoms/Error";

const Errors = ({ errors }) => (
  <div className="absolute bottom-[30px] right-[30px] translate-x-[calc(100%_+_30px)] animate-slideInOut">
    {errors.map((message, id) => (
      <Error message={message} key={id} />
    ))}
  </div>
);

export default Errors;
