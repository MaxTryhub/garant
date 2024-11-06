import React from "react";
import "./services_container.css";

const ServicesContainer = ({ onOrderClick }) => {
  return (
    <div className="services_container">
      <h1 className="services-title">Послуги</h1>
      <ul className="services-list list">
        <li className="services-item">
          <div className="services-item_text-container">
            <h3 className="services-item_title">М’яка покрівля</h3>
            <p className="services-item_text">
              Ми спеціалізуємося на професійному монтажі та ремонті м'якої
              покрівлі, яка включає бітумні матеріали та плівки. Цей тип
              покрівлі є ідеальним рішенням для житлових та комерційних
              будівель. Забезпечуємо надійний захист від атмосферних впливів, а
              також гарантуємо довговічність і безпеку вашої покрівлі.
            </p>
          </div>
          <img src="./img/services-1.jpg" alt="" className="services-img"></img>
          <div className="services_click-container" onClick={onOrderClick}>
            <p className="services_click-btn">Замовити</p>
            <div className="border-line"></div>
          </div>
        </li>
        <li className="services-item">
          <div className="services-item_text-container">
            <h3 className="services-item_title">Жорстка покрівля</h3>
            <p className="services-item_text">
              Наша команда здійснює установку та ремонт жорсткої покрівлі,
              включаючи металочерепицю, профнастил та інші сучасні матеріали. Ми
              допоможемо вам вибрати оптимальне рішення, яке поєднує естетичний
              вигляд і функціональність. Використання якісних матеріалів
              забезпечить тривалий термін служби вашої покрівлі.
            </p>
          </div>
          <img src="./img/services-2.jpg" alt="" className="services-img"></img>
          <div className="services_click-container" onClick={onOrderClick}>
            <p className="services_click-btn">Замовити</p>
            <div className="border-line"></div>
          </div>
        </li>
        <li className="services-item">
          <div className="services-item_text-container">
            <h3 className="services-item_title">Ремонт і усунення протікань</h3>
            <p className="services-item_text">
              Виявлення та усунення джерел протікань — важлива частина нашої
              роботи. Ми швидко реагуємо на ваші запити і проводимо детальний
              аналіз покрівлі для виявлення проблем. Використовуючи ефективні
              методи, ми забезпечуємо надійний захист вашого будинку від вологи,
              що може призвести до серйозних руйнувань.
            </p>
          </div>
          <img
            src="./img/services-3.webp"
            alt=""
            className="services-img"
          ></img>
          <div className="services_click-container" onClick={onOrderClick}>
            <p className="services_click-btn">Замовити</p>
            <div className="border-line"></div>
          </div>
        </li>
        <li className="services-item">
          <div className="services-item_text-container">
            <h3 className="services-item_title">
              Встановлення сонячних батарей
            </h3>
            <p className="services-item_text">
              Переходьте на альтернативні джерела енергії з нашим професійним
              монтажем сонячних панелей. Це не лише зменшує витрати на
              електроенергію, але й сприяє захисту навколишнього середовища. Ми
              надаємо комплексні рішення, щоб забезпечити максимальну
              ефективність вашої сонячної системи.
            </p>
          </div>
          <img
            src="./img/services_battery.jpg"
            alt=""
            className="services-img"
          ></img>
          <div className="services_click-container" onClick={onOrderClick}>
            <p className="services_click-btn">Замовити</p>
            <div className="border-line"></div>
          </div>
        </li>
        <li className="services-item">
          <div className="services-item_text-container">
            <h3 className="services-item_title">Стяжка покрівлі</h3>
            <p className="services-item_text">
              Виконання стяжки покрівлі є важливим етапом, який забезпечує
              належне відведення води та рівномірний розподіл навантаження. Наші
              спеціалісти використовують сучасні матеріали, що дозволяє
              продовжити термін служби вашої покрівлі та запобігти накопиченню
              води.
            </p>
          </div>
          <img src="./img/services-5.jpg" alt="" className="services-img"></img>
          <div className="services_click-container" onClick={onOrderClick}>
            <p className="services_click-btn">Замовити</p>
            <div className="border-line"></div>
          </div>
        </li>
        <li className="services-item">
          <div className="services-item_text-container">
            <h3 className="services-item_title">Обслуговування покрівлі</h3>
            <p className="services-item_text">
              Регулярне обслуговування покрівлі допомагає виявити потенційні
              проблеми на ранніх стадіях. Ми пропонуємо технічний огляд,
              прибирання та профілактичні заходи, які допоможуть уникнути
              серйозних витрат на ремонти та продовжити термін служби вашої
              покрівлі.
            </p>
          </div>
          <img src="./img/services-4.JPG" alt="" className="services-img"></img>
          <div className="services_click-container" onClick={onOrderClick}>
            <p className="services_click-btn">Замовити</p>
            <div className="border-line"></div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ServicesContainer;
