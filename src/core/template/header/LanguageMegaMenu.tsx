"use client";

import { ChangeEvent, useState, useTransition } from "react";
import { montserrat } from "../../utils/fonts";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "../../../navigation";

const LanguageMegaMenu = ({ textClass }) => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const languageContent = [
    { id: 1, language: "English", locale: "en" },
    { id: 2, language: "Español", locale: "es" },
  ];

  const [selectedCurrency, setSelectedCurrency] = useState(languageContent[0]);

  function handleLanguageChange(locale: string) {
    startTransition(() => {
      router.replace(pathname, { locale });
    });
  }

  return (
    <>
      {/* Start language currency Selector */}
      {/* End language currency Selector */}
      <nav className={`${montserrat.className} menu js-navList`}>
        <ul className={`menu__nav  -is-active`}>
          <li
            className={`${
              false ? "current" : ""
            } menu-item-has-children text-exotic-dark `}
          >
            <span className="js-language-mainTitle">
              {languageContent.find(l=>l.locale===locale)?.language}
            </span>
            <i className="icon-chevron-sm-down text-7 ml-15" />
            <ul className="subnav py-0">
              {languageContent.map((menu, i) => (
                <li key={i} className={true ? "current" : ""}>
                  <button
                    className="button -exotic py-10 my-2 px-5 w-100 justify-content-start text-exotic-text"
                    onClick={() => handleLanguageChange(menu.locale)}
                  >
                    {menu.language}
                  </button>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>

      {/*
        <div className={`langMenu js-langMenu ${click ? "" : "is-hidden"}`}>
          <div className="currencyMenu__bg" onClick={handleCurrency}></div>
          <div className="langMenu__content bg-white rounded-4">
            <div className="d-flex items-center justify-between px-30 py-20 sm:px-15 border-bottom-light">
              <div className="text-20 fw-500 lh-15">Select your language</div>
              {/* End title }
              <button className="pointer" onClick={handleCurrency}>
                <i className="icon-close" />
              </button>
              {/* End colse button }
            </div>
            {/* Emd flex-wrapper }
            <ul className="modalGrid px-30 py-30 sm:px-15 sm:py-15">
              {languageContent.map((item) => (
                <li
                  className={`modalGrid__item js-item ${
                    selectedCurrency.country === item.country ? "active" : ""
                  }`}
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                >
                  <div className="py-10 px-15 sm:px-5 sm:py-5">
                    <div className="text-15 lh-15 fw-500 text-dark-1">
                      {item.language}
                    </div>
                    <div className="text-14 lh-15 mt-5 js-title">
                      {item.country}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* End langMenu }
        </div>
      */}
    </>
  );
};

export default LanguageMegaMenu;
