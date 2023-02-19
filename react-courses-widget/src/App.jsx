import { useState, useEffect } from "react";
import s from "./style.module.css";
import CourseForm from "./Components/CourseForm/CourseForm";
import CourseList from "./Components/CourseList/CourseList";
import { Courses } from "./Data";

function App() {
  const [courses, setCourses] = useState("");
  const [search, setSearch] = useState("");

  let results = [];

  results = courses;

  useEffect(() => {
    setCourses(Courses);
  }, []);

  useEffect(() => {
    setSearch(results);
  }, [ , results]);


  const handleChangeCourse = (search) => {
    results = !search ? courses : courses.filter((course) => course.title.toUpperCase().includes(search.toUpperCase()));
    console.log(results);
    setSearch(results);
  }
  
  return (
    <div className={s.body}>
      <CourseForm onChangeCourse={handleChangeCourse} />
      <CourseList results={search} />
    </div>
  );
}

export default App;