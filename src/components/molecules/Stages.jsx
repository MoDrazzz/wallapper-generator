import StageLine from "@/components/atoms/StageLine";
import Stage from "@/components/atoms/Stage";

const Stages = () => (
  <div className="mx-auto flex items-center">
    <Stage isActive>1</Stage>
    <StageLine />
    <Stage>2</Stage>
    <StageLine />
    <Stage>3</Stage>
  </div>
);

export default Stages;
