import OutputCallendar from "@/components/organisms/OutputCallendar.jsx";

const Output = ({ outputRef }) => (
  <div ref={outputRef} id="exportContainer" className="hidden">
    <div
      className={`flex h-[100vh] flex-col justify-end bg-cover bg-center`}
      id="outputPhoto"
    >
      <OutputCallendar />
    </div>
  </div>
);

export default Output;
