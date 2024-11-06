import React from "react";
import "./phone_container.css";

const PhoneContainer = () => {
  const handlePhoneClick = () => {
    window.location.href = "tel:+380996874656"; // Замените на нужный номер
  };

  const disableContextMenu = (e) => {
    e.preventDefault(); // Отключаем контекстное меню при нажатии ПКМ
  };

  return (
    <div className="phone_container" onClick={handlePhoneClick}>
      <div className="phone_img_container">
        <img
          src="./img/phone.png"
          alt="Call"
          onContextMenu={disableContextMenu} // Отключаем контекстное меню
        />
      </div>
      <div className="phone_text_container" onClick={handlePhoneClick}>
        <p className="phone_text">Потрібна консультація?</p>
      </div>
    </div>
  );
};

export default PhoneContainer;
