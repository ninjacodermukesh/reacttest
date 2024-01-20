import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="d-flex" id="wrapper">
      {children}
    </div>
  );
};
