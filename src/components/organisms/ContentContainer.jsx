const ContentContainer = ({ children }) => (
  <main className="flex min-h-[60vh] w-full min-w-min max-w-[500px] flex-col gap-[20px] rounded-[20px] bg-white p-[30px] sm:p-[40px] md:p-[50px]">
    {children}
  </main>
);

export default ContentContainer;
