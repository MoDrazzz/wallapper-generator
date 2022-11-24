import OutputCallendar from "@/components/organisms/OutputCallendar.jsx";

const Output = ({ outputRef }) => {
  return (
    <div
      className="flex h-[100vh] flex-col justify-end bg-[url('src/assets/mockPhoto.jpg')] bg-cover bg-center"
      ref={outputRef}
    >
      <OutputCallendar />
    </div>
  );
};

export default Output;
