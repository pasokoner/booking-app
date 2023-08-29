import React, { HTMLProps, ReactNode } from "react";

interface ContainerProps extends HTMLProps<HTMLDivElement> {}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="mx-auto max-w-7xl">{children}</div>;
};

export default Container;
