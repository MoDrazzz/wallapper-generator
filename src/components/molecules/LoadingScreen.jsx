import Paragraph from "@/components/atoms/Paragraph";
import LoadingIndicator from "@/components/atoms/LoadingIndicator";

const LoadingScreen = ({ text }) => (
  <div className="flex w-full grow flex-col items-center justify-center gap-[20px]">
    <Paragraph>{text}...</Paragraph>
    <LoadingIndicator />
  </div>
);

export default LoadingScreen;
