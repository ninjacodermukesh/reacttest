// LanguageSelector.tsx
import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="form-group">
      <select className="p-1" onChange={(e) => changeLanguage(e.target.value)}>
        <option value="en">En</option>
        <option value="es">Es</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
