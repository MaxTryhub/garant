import React from "react";
import "leaflet/dist/leaflet.css";
import "./footer.css";
import SimpleMap from "./map";
const Footer = React.forwardRef((props, ref) => {
  return (
    <footer className="footer" ref={ref}>
      <div className="footer-container">
        <div className="footer-contacts_map">
          <div className="footer-contacts">
            <h1 className="footer-contacts_title">Контакти</h1>
            <ul className="footer-contacts_container-list list">
              <li className="footer-contacts_list-item">
                <svg className="footer_svg" viewBox="0 0 24 24">
                  <use href="./img/sprite.svg#phone"></use>
                </svg>
                <span className="footer-contacts_list-item_first">+38 </span>
                <a
                  className="footer-contacts_list-link link"
                  href="tel:+380985598685"
                >
                  (098) 559-86-85
                </a>
              </li>
              <li className="footer-contacts_list-item">
                <svg className="footer_svg" viewBox="0 0 24 24">
                  <use href="./img/sprite.svg#phone"></use>
                </svg>
                <span className="footer-contacts_list-item_first">+38 </span>
                <a
                  className="footer-contacts_list-link link"
                  href="tel:+380996874656"
                >
                  (099) 687-46-56
                </a>
              </li>
            </ul>
          </div>
          <SimpleMap />
        </div>
      </div>
      <div className="footer_bot">
        <div className="footer_bot-info">
          Компанія GarantKrovla.kh.ua Всі права захищені. © 2019.
        </div>
      </div>
    </footer>
  );
});

export default Footer;
