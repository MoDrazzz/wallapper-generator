import LoadingIndicator from "@/components/atoms/LoadingIndicator";
import Paragraph from "@/components/atoms/Paragraph";

const LoadingScreen = ({ text }) => (
  <div className="flex w-full grow flex-col items-center justify-center gap-[20px]">
    <Paragraph>{text}...</Paragraph>
    <LoadingIndicator />
  </div>
);

export default LoadingScreen;
