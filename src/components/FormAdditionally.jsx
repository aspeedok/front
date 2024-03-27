import React, { useState } from "react";
import * as additionallyForm from "../utils/additionallyForm";

const FormAdditionally = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    created: "",
    theme: "",
    text: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    let newErrors = { ...errors };

    // В зависимости от имени поля выполняем проверку на ошибки
    switch (name) {
      case "name":
        newErrors.name =
          !/^[А-ЯЁ][а-яё]+\s[А-ЯЁ][а-яё]+\s[А-ЯЁ][а-яё]+$/.test(value)
            ? "Введите ФИО в формате: Иванов Иван Иванович"
            : "";
        break;
      case "email":
        newErrors.email = !/\S+@\S+\.\S+/.test(value)
          ? "Введите корректный email"
          : "";
        break;
      case "created":
        newErrors.created = !/^\d{2}\.\d{2}\.\d{4}$/.test(value)
          ? "Введите дату в формате: ДД.ММ.ГГГГ"
          : "";
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    additionallyForm
    .addForm(formData.name, formData.email, formData.theme, formData.created, formData.text)
    .then((data) => {
      console.log("Данные успешно переданы на бэкенд:", data);
    })
    .catch((err) => {
      console.log(formData)
      console.log("Ошибка при передаче данных на бэкенд:", err);
    });
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "100px",
        gap: "10px",
      }}
      onSubmit={handleSubmit}
    >
      <h2
        style={{
          marginBottom: "20px",
        }}
      >
        Дополнительная задача
      </h2>
      <input
        type="text"
        name="name"
        placeholder="ФИО"
        required
        onChange={handleChange}
      />
      {errors.name && <p>{errors.name}</p>}

      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        onChange={handleChange}
      />
      {errors.email && <p>{errors.email}</p>}

      <input
        type="text"
        name="created"
        placeholder="ДД.ММ.ГГГГ"
        required
        onChange={handleChange}
      />
      {errors.created && <p>{errors.created}</p>}

      <select name="theme" onChange={handleChange} required>
        <option value="">Выберите тему обращения</option>
        <option value="theme1">theme1</option>
        <option value="theme2">theme2</option>
        <option value="theme3">theme3</option>
      </select>

      <textarea
            name="text"
            placeholder="Текст обращения"
            onChange={handleChange}
          />

      <button type="submit">Отправить</button>
    </form>
  );
};

export default FormAdditionally;
