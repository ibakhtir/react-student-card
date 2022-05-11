import React from "react";
import { useParams } from "react-router-dom";

import StudentPage from "../components/page/studentPage";
import CreatePage from "../components/page/createPage";
import EditPage from "../components/page/editPage";

const StudentCard = () => {
  const { type } = useParams();

  return (
    <>
      {(type === undefined && <StudentPage />) ||
        (type === "create" && <CreatePage />) ||
        (type === "edit" && <EditPage />)}
    </>
  );
};

export default StudentCard;
