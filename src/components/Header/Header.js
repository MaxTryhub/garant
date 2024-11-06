import React, { useState } from "react";
import "./Header.css";
import NumberContainer from "./Number_container";

function Header({ navItems, scrollToRef, activeIndex }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isMenuOpen ? "menu-open" : ""}`}>
      <NumberContainer />
      <div className="container">
        {!isMenuOpen && (
          <div className="active-item-display">
            <div className="svg-wrapper">
              <svg height="60" width="280" xmlns="http://www.w3.org/2000/svg">
                <g className="svg-content active">
                  <rect className="shape" height="60" width="280" />
                  <text
                    key={activeIndex} // Добавляем key для перерисовки текста
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    className="svg-text fade-in" // Класс для анимации
                  >
                    {navItems[activeIndex]?.name || "Переваги"}
                  </text>
                </g>
              </svg>
            </div>
          </div>
        )}
        <div className="header-brand">
          <div className="burger-icon" onClick={toggleMenu}>
            <span className={`line ${isMenuOpen ? "line1" : ""}`} />
            <span className={`line ${isMenuOpen ? "line2" : ""}`} />
            <span className={`line ${isMenuOpen ? "line3" : ""}`} />
          </div>
          <ul className={`header_nav_list list ${isMenuOpen ? "open" : ""}`}>
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`header_nav_item ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => {
                  scrollToRef(item.ref);
                  setIsMenuOpen(false); // Закрываем меню после клика на пункт
                }}
              >
                <div className="svg-wrapper">
                  <svg
                    height="60"
                    width="320"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      className={`svg-content ${
                        activeIndex === index ? "active" : ""
                      }`}
                    >
                      <rect className="shape" height="60" width="320" />
                      <text
                        x="50%"
                        y="50%"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        className="svg-text"
                      >
                        {item.name}
                      </text>
                    </g>
                  </svg>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
