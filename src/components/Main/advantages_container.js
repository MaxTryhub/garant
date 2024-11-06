import React from "react";
import "./advantages_container.css";

const AdvantagesContainer = () => {
  return (
    <div className="advantages_container">
      <h1 className="advanteges-title">Наші переваги</h1>
      <ul className="advanteges-list list">
        <li className="advanteges-item">
          <svg className="svg-builder svg-advanteges">
            <use href="/img/sprite.svg#builder"></use>
          </svg>

          <div className="advanteges-item_text-container">
            <h3 className="advanteges-item_title">Професійний підхід</h3>
            <p>Команда досвідчених спеціалістів із багаторічним стажем.</p>
          </div>
        </li>
        <li className="advanteges-item">
          <svg viewBox="0 0 24 24" className="svg-materials svg-advanteges">
            <use href="/img/sprite.svg#materials"></use>
          </svg>
          <div className="advanteges-item_text-container">
            <h3 className="advanteges-item_title">Якісні матеріали</h3>
            <p>Використовуємо лише перевірені та сертифіковані матеріали.</p>
          </div>
        </li>
        <li className="advanteges-item">
          <svg
            viewBox="0 0 111.811 122.88"
            className="svg-shield svg-advanteges"
          >
            <use href="/img/sprite.svg#shield"></use>
          </svg>
          <div className="advanteges-item_text-container">
            <h3 className="advanteges-item_title">Гарантія на всі роботи</h3>
            <p>Надаємо гарантію якості на кожен етап робіт.</p>
          </div>
        </li>
        <li className="advanteges-item">
          <svg viewBox="0 0 16 16" className="svg-tehnology svg-advanteges">
            <use href="/img/sprite.svg#tehnology"></use>
          </svg>
          <div className="advanteges-item_text-container">
            <h3 className="advanteges-item_title">Сучасні технології</h3>
            <p>Застосовуємо новітні методи та технології монтажу.</p>
          </div>
        </li>
        <li className="advanteges-item">
          <svg viewBox="0 0 512 512" className="svg-handshake svg-advanteges">
            <use href="/img/sprite.svg#handshake"></use>
          </svg>
          <div className="advanteges-item_text-container">
            <h3 className="advanteges-item_title">Індивідуальний підхід</h3>
            <p>
              Пропонуємо рішення, що відповідають вашим потребам та бюджету.
            </p>
          </div>
        </li>
        <li className="advanteges-item">
          <svg viewBox="0 0 24 24" className="svg-clock svg-advanteges">
            <use href="/img/sprite.svg#clock"></use>
          </svg>
          <div className="advanteges-item_text-container">
            <h3 className="advanteges-item_title">Швидкість та надійність</h3>
            <p>Працюємо в узгоджені терміни, дотримуючись стандартів якості.</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AdvantagesContainer;
