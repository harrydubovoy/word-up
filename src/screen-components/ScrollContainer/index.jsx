import React from "react";
import classNames from "classnames";

const ScrollContainer = ({ children, className }) => (
  <div className={classNames("overflow-y-auto h-full" , className)}>
    {children}
  </div>
)

export default ScrollContainer;
