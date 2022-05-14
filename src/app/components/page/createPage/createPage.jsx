import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";

import TextField from "../../form/textField";

const CreatePage = () => {
  const [data, setData] = useState({
    name: "",
    surname: "",
    dateOfBirth: "",
    website: "",
  });

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const validateScheme = yup.object().shape({
    name: yup.string().required("Поле 'Имя' обязательно для заполнения"),
    surname: yup.string().required("Поле 'Фамилия' обязательно для заполнения"),
    dateOfBirth: yup
      .string()
      .required("Поле 'Год рождения' обязательно для заполнения")
      .length(4, "Поле 'Год рождения' некорректно")
      .matches(/(^\d+$)/, "Поле 'Год рождения' некорректно")
      .test(
        "isYear",
        "Поле 'Год рождения' некорректно",
        (value) => Number(value) < new Date().getFullYear() && Number(value) > 0
      ),
    website: yup
      .string()
      .required("Поле 'Портфолио' обязательно для заполнения")
      .url("Поле 'Портфолио' должно быть ссылкой"),
  });

  const validate = () => {
    validateScheme
      .validate(data) // { abortEarly: false }
      .then(() => setErrors({}))
      .catch((err) => setErrors({ [err.path]: err.message }));
    return Object.keys(errors).length === 0;
  };

  useEffect(() => {
    validate();
  }, [data]);

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("student", JSON.stringify(data));
    history.push("/student");
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          label="Имя"
          name="name"
          value={data.name}
          onChange={handleChange}
          error={errors.name}
        />
        <TextField
          type="text"
          label="Фамилия"
          name="surname"
          value={data.surname}
          onChange={handleChange}
          error={errors.surname}
        />
        <TextField
          type="number"
          label="Год рождения"
          name="dateOfBirth"
          value={data.dateOfBirth}
          onChange={handleChange}
          error={errors.dateOfBirth}
        />
        <TextField
          type="url"
          label="Портфолио"
          name="website"
          value={data.website}
          onChange={handleChange}
          error={errors.website}
        />
        <button className="btn btn-primary" type="submit">
          Создать
        </button>
      </form>
    </div>
  );
};

export default CreatePage;
