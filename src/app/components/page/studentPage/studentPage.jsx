import React from "react";
import { useHistory } from "react-router-dom";

const StudentPage = () => {
  const student = JSON.parse(localStorage.getItem("student"));

  const history = useHistory();

  const handleClick = () => {
    student
      ? history.push(history.location.pathname + "/edit")
      : history.push(history.location.pathname + "/create");
  };

  return (
    <div className="container mt-5">
      <div>
        <h1>Карточка студента</h1>
        {student ? (
          <div>
            <p>Имя: {student.name}</p>
            <p>Фамилия: {student.surname}</p>
            <p>Год рождения: {student.dateOfBirth}</p>
            <p>
              Портфолио: <a href={student.website}>{student.website}</a>{" "}
            </p>
          </div>
        ) : (
          <p>Нет данных</p>
        )}
        <button onClick={handleClick} className="btn btn-primary" type="submit">
          {student ? "Редактировать" : "Добавить"}
        </button>
      </div>
    </div>
  );
};

export default StudentPage;
