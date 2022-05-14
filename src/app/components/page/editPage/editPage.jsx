import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import TextField from "../../form/textField";

const EditPage = () => {
  const student = JSON.parse(localStorage.getItem("student"));

  const [data, setData] = useState(student || {});

  const history = useHistory();

  const handleClick = () => {
    history.push("/student");
  };

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
        />
        <TextField
          type="text"
          label="Фамилия"
          name="surname"
          value={data.surname}
          onChange={handleChange}
        />
        <TextField
          type="number"
          label="Год рождения"
          name="dateOfBirth"
          value={data.dateOfBirth}
          onChange={handleChange}
        />
        <TextField
          type="text"
          label="Портфолио"
          name="website"
          value={data.website}
          onChange={handleChange}
        />
        <button
          className="btn btn-secondary"
          type="button"
          onClick={handleClick}
        >
          Назад
        </button>
        <button className="btn btn-primary" type="submit">
          Обновить
        </button>
      </form>
    </div>
  );
};

export default EditPage;
