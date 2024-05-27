function ScreenContent({ children }) {
  return (
    <div className="flex flex-col relative h-full max-h-full">
      {children}
    </div>
  );
}

export default ScreenContent;
