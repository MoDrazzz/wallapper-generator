import StageLine from "@/components/atoms/StageLine";
import Stage from "@/components/atoms/Stage";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Stages = () => {
  const { pathname: location } = useLocation();

  const activeElements = {
    firstStage:
      location == "/upload" ||
      location == "/details" ||
      location == "/download",
    firstStageLine: location == "/details" || location == "/download",
    secondStage: location == "/details" || location == "/download",
    secondStageLine: location == "/download",
    thirdStage: location == "/download",
  };

  return (
    <div className="mx-auto flex items-center">
      <Stage isActive={activeElements.firstStage}>1</Stage>
      <StageLine isActive={activeElements.firstStageLine} />
      <Stage isActive={activeElements.secondStage}>2</Stage>
      <StageLine isActive={activeElements.secondStageLine} />
      <Stage isActive={activeElements.thirdStage}>3</Stage>
    </div>
  );
};

export default Stages;
