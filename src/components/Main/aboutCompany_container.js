import React from "react";
import "./aboutCompany_container.css";

const AboutCompanyContainer = () => {
  return (
    <div className="aboutCompany_container">
      <h1 className="aboutCompany-title">Про компанію</h1>
      <div className="aboutCompany_img-container">
        <div className="ab-cont">
          <p className="aboutCompany-text">
            В "Garant Krovlia" ми розуміємо, що покрівля є важливою частиною
            вашого дому, яка захищає від впливу зовнішнього середовища та додає
            естетичного вигляду. Наша компанія спеціалізується на повному
            спектрі послуг з монтажу, ремонту та обслуговування покрівлі. Ми
            працюємо з різними типами покрівель, включаючи м’які та жорсткі
            системи, з особливим акцентом на роботу з рубероидом, якою
            займаємося вже 15 років. Це наша гордість, і ми маємо великий досвід
            у забезпеченні надійності та довговічності. Наші фахівці уважно
            ставляться до кожного проекту, незалежно від його складності. Ми
            пропонуємо професійний монтаж, ремонт покрівлі, усунення протікань,
            а також встановлення сонячних батарей.
          </p>
          <img
            className="aboutCompany-img"
            src="./img/about_company.jpg"
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
};

export default AboutCompanyContainer;
