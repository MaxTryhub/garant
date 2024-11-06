import React, { useState, useEffect } from "react";
import "./form.css";

const Modal = ({ onClose }) => {
  const [isFormOpen, setIsFormOpen] = useState(true); // Показ формы
  const [isMessageVisible, setIsMessageVisible] = useState(false); // Показ сообщения об отправке
  const [formData, setFormData] = useState({
    userName: "",
    userTel: "+38(0",
    userText: "",
  });
  const [errors, setErrors] = useState({
    userName: "",
    userTel: "",
    userText: "",
  });

  // Используем эффект, чтобы закрыть модальное окно через 5 секунд после успешной отправки формы
  useEffect(() => {
    if (isMessageVisible) {
      const timer = setTimeout(() => {
        onClose(); // Закрываем все окно через 5 секунд после показа сообщения
      }, 5000);

      return () => clearTimeout(timer); // Очистка таймера при размонтировании
    }
  }, [isMessageVisible, onClose]);

  const sendMessageToTelegram = async (formData) => {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    console.log(process.env);
    const message = `
      Новое сообщение с сайта GarantKrovlia:
      Имя: ${formData.userName}
      Телефон: ${formData.userTel}
      Текст сообщения: ${formData.userText}
    `;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const data = {
      chat_id: chatId,
      text: message,
      parse_mode: "HTML",
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Сообщение отправлено в Telegram");
      } else {
        console.error("Ошибка при отправке сообщения в Telegram");
      }
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const phoneRegex = /^\+38 \(\d{3}\) \d{3} \d{2} \d{2} $/;
    if (!phoneRegex.test(formData.userTel)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        userTel: "Введено неправильний формат номеру",
      }));
      return;
    }

    try {
      await sendMessageToTelegram(formData);
      setIsFormOpen(false); // Скрываем форму
      setIsMessageVisible(true); // Показываем сообщение об отправке

      setFormData({
        userName: "",
        userTel: "+38(0",
        userText: "",
      });
      setErrors({
        userName: "",
        userTel: "",
        userText: "",
      });
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "userTel") {
      if (!/^\d+$/.test(event.nativeEvent.data)) {
        event.preventDefault();
        return;
      }

      const phoneNumber = value.replace(/\D/g, "");
      if (phoneNumber.length > 13) {
        event.preventDefault();
        return;
      }

      let formattedValue = "+38 ";
      if (phoneNumber.length > 2) {
        formattedValue += `(${phoneNumber.substring(2, 5)}) `;
      }
      if (phoneNumber.length > 5) {
        formattedValue += `${phoneNumber.substring(5, 8)} `;
      }
      if (phoneNumber.length > 8) {
        formattedValue += `${phoneNumber.substring(8, 10)} `;
      }
      if (phoneNumber.length > 10) {
        formattedValue += `${phoneNumber.substring(10, 12)} `;
      }

      setFormData((prevData) => ({
        ...prevData,
        [name]: formattedValue,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="modal-container" onClick={handleClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-title">
          <h2> Залишайте заявку</h2>
        </div>
        <div className="modal-content">
          <button className="close-btn" onClick={handleClose}>
            <svg
              className="svg-modal"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <defs>
                <style>
                  {`.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}`}
                </style>
              </defs>
              <g id="cross">
                <line className="cls-1" x1="7" x2="25" y1="7" y2="25" />
                <line className="cls-1" x1="7" x2="25" y1="25" y2="7" />
              </g>
            </svg>
          </button>

          {isMessageVisible ? (
            <div className="modal-end">
              <div className="logo_container">
                <img className="logo" src="./img/logo.png" alt=""></img>
              </div>
              <div className="modal-content-end">
                <p className="modal-text-end">
                  Дякуємо за надані дані, наш менеджер зв'яжеться з вами
                  найближчим часом!
                </p>
              </div>
            </div>
          ) : (
            isFormOpen && (
              <form className="modal-form" onSubmit={handleSubmit}>
                <div className="form-field">
                  <label htmlFor="user-name" className="form-label"></label>
                  <span className="input-wrapper">
                    <input
                      className={`input-name form-input ${
                        errors.userName ? "invalid" : ""
                      }`}
                      placeholder="Ім'я"
                      type="text"
                      name="userName"
                      id="user-name"
                      value={formData.userName}
                      onChange={handleChange}
                    />
                    {errors.userName && (
                      <p className="error-message">{errors.userName}</p>
                    )}
                  </span>
                </div>
                <div className="form-field">
                  <label htmlFor="user-tel" className="form-label"></label>
                  <span className="input-wrapper">
                    <input
                      className={`input-name form-input ${
                        errors.userTel ? "invalid" : ""
                      }`}
                      placeholder="Телефон"
                      type="tel"
                      name="userTel"
                      id="user-tel"
                      value={formData.userTel}
                      onChange={handleChange}
                    />
                    {errors.userTel && (
                      <p className="error-message">{errors.userTel}</p>
                    )}
                  </span>
                </div>
                <div className="form-star">
                  <p className="form-star-text">
                    (<span>*</span>)Необов'язково
                  </p>
                </div>
                <div className="form-field">
                  <label htmlFor="user-text" className="form-label"></label>
                  <textarea
                    name="userText"
                    id="user-text"
                    className="modal-text-input"
                    placeholder="Опишіть вашу проблему"
                    value={formData.userText}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn input-btn">
                  Відправити
                </button>
              </form>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
