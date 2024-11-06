import React from "react";
import "./Number_container.css";
const NumberContainer = () => {
  return (
    <div className="Number_container">
      <div className="Number_flex-container">
        <div className="logo_container">
          <img className="logo" src="./img/logo.png" alt=""></img>
        </div>
        <div className="contacts_container">
          <ul className="contacts_container-list list">
            <li className="contacts_list-item">
              <span className="contacts_list-item_first">+38</span>
              <a className="contacts_list-link link" href="tel:+380996874656">
                (099)-687-46-56
              </a>
            </li>
            <li className="contacts_list-item">
              <span className="contacts_list-item_first">+38</span>
              <a className="contacts_list-link link" href="tel:+380985598685">
                (098) 559-86-85
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NumberContainer;
