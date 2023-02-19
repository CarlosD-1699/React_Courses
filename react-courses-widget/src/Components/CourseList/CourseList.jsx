import React from "react";
import CourseInfo from "../CourseInfo/CourseInfo";
import s from "./style.module.css";

const CourseList = ({results}) => {
  if (results?.length === 0) {
    return <h1 className="Message-Alert">No hay cursos aun</h1>;
  }

  return (
    <div className={s.List}>
      {results.map((result) => (
        <CourseInfo key={result.id} result={result} />
      ))}
    </div>
  );
};

export default CourseList;
