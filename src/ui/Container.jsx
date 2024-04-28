import React from "react";
import classNames from "classnames";

const Container = ({ children, className }) => (
  <div className={classNames('px-4', className)}>
    {children}
  </div>
)

export default Container;
