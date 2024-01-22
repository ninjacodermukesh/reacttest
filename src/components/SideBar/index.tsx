import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  const menuOptions = [t("Menu.users"), t("Menu.news")];

  return (
    <div className="border-end bg-white" id="sidebar-wrapper">
      <div className="sidebar-heading border-bottom bg-light">SPA</div>
      <div className="list-group list-group-flush">
        {menuOptions?.map((option, index) => (
          <Link
            className="list-group-item list-group-item-action list-group-item-light p-2 text-capitalize"
            to={`/${option.toLowerCase()}`}
            key={`options-${index}`}
          >
            {option}
          </Link>
        ))}
      </div>
    </div>
  );
};
