import useRender from "@/hooks/useRender";
import { OutputContext } from "@/App";
import { useContext } from "react";
import Output from "./Output";

const Form = () => {
  const outputRef = useContext(OutputContext);
  const { renderWallpapers } = useRender(outputRef);

  return (
    <div>
      <button
        className="absolute top-3 left-3 rounded-lg bg-indigo-600 px-3 py-2 text-white"
        onClick={renderWallpapers}
      >
        Click me!
      </button>
      <Output />
    </div>
  );
};

export default Form;
