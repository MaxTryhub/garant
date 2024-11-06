import React, { useState, useEffect } from "react";
import "./Click_container.css";

const titles = [
  "займаємось ремонтом будь-якої покрівлі",
  "займаємось наплавленням руберойду",
  "будуємо покрівлі з нуля",
  "знаходимо та усуваємо будь-яке протікання",
  "займаємось стяжкою на покрівлях",
  "обслуговуємо покрівлі",
  "працюємо з будь-яким матеріалом",
  "встановлюємо сонячні панелі",
  "робимо все, що повʼязане з покрівлею",
  "любимо свою роботу",
];

const ClickContainer = ({ onOrderClick }) => {
  const [currentTitle, setCurrentTitle] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = titles[index];
    const typingSpeed = 50; // Скорость печати
    const deletingSpeed = 50; // Скорость стирания (можно сделать быстрее)

    const typeTimeout = setTimeout(
      () => {
        if (!isDeleting && currentTitle.length < currentText.length) {
          // Печатает текст
          setCurrentTitle(currentText.slice(0, currentTitle.length + 1));
        } else if (!isDeleting && currentTitle.length === currentText.length) {
          // Пауза перед началом удаления текста
          setTimeout(() => setIsDeleting(true), 3000); // Задержка в 2 секунды перед стиранием
        } else if (isDeleting && currentTitle.length > 0) {
          // Удаляет текст
          setCurrentTitle(currentTitle.slice(0, currentTitle.length - 1));
        } else if (isDeleting && currentTitle.length === 0) {
          // Переход к следующему элементу массива
          setIsDeleting(false);
          setIndex((index + 1) % titles.length);
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(typeTimeout);
  }, [currentTitle, isDeleting, index]);

  return (
    <div className="click_container">
      <div className="click_btn-container">
        <h1 className="click_title">Garant Krovlia</h1>
        <p className="click_text">
          <span>Ми </span>
          <span className="typing_effect">{currentTitle}</span>
        </p>
        <div className="click_btn_sec-container">
          <button
            style={{ "--clr": "rgb(177 191 46)", "--i": 0 }}
            className="click-btn"
            onClick={onOrderClick} // Используем функцию правильно
          >
            <span>Замовити</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClickContainer;
