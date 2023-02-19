import {useState} from 'react'
import s from "./style.module.css";

const CourseForm = ({onChangeCourse}) => {

  const [search, setSearch] = useState();

  function onChange(e){
    const value = e.target.value;
    //if(value != ''){
    setSearch(value);
    //}
  }

    function handleSubmit(e){
        e.preventDefault();
        onChangeCourse(search);
    }

  return (
    <div className={s.container}>
        <form onSubmit={handleSubmit}>
            <input className={s.searchbar} type="text" placeholder='Buscar' onChange={onChange} autoFocus></input>
            <input className={s.sendbutton} type="submit" ></input>
        </form>
    </div>
  )
}

export default CourseForm