import React from "react";
import { useLanguage } from "../context/language-context";
import { buttonLabels } from "../assets/lib/data";

const LanguageSwitch: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <React.Fragment>
      <div className="language-switch-container">
        <input
          className="tgl tgl-style"
          id="toggle-language"
          type="checkbox"
          onChange={toggleLanguage}
          checked={language === "EN"}
        />
        <label
          className="tgl-btn"
          htmlFor="toggle-language"
          data-tg-off={buttonLabels.language.de}
          data-tg-on={buttonLabels.language.en}
        ></label>
      </div>
    </React.Fragment>
  );
};

export default LanguageSwitch;
