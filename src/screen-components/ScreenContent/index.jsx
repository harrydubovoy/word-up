import React from "react";

const ScreenContent = ({ children }) => (
  <div className="flex flex-col relative overflow-hidden h-full max-h-full">
    {children}
  </div>
)

export default ScreenContent;
