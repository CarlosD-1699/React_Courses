import s from "./style.module.css";

const CourseInfo = ({result}) => {
  return (
    <div className={s.Card}>
      <div>
        <img src={result.image} className={s.image}/>
      </div>
      <div className={s.text}>
        <p>{result.title}</p>
        <p>{result.teacher}</p>
      </div>
    </div>
  )
}

export default CourseInfo