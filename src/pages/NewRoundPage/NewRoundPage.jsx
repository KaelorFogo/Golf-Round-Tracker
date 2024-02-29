import { getCourse } from "../../utilities/courses-api";
import { useEffect, useState } from "react";
import "../../components/RoundCard/RoundCard.css";
import NewRoundForm from '../../components/NewRoundForm/NewRoundForm'

export default function NewRoundPage() {
  const [course, setCourse] = useState("");
  const [courseOptions, setCourseOptions] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setSelectedCourse(null);
    try {
      const courseApi = await getCourse(course);
      console.log(courseApi);
      setCourseOptions(courseApi);
    } catch (error) {
      console.log(error);
    }
  };

  const CourseOptions = courseOptions.map((course) => (
    <div className="card" key={course._id}>
      <div className="card-content">
        <h2>{course.name}</h2>
        <h3>
          {course.city}, {course.state}
        </h3>
        <button onClick={() => setSelectedCourse(course)}>Select Course</button>
      </div>
    </div>
  ));

  return (
    <>

      {selectedCourse ?
       <NewRoundForm selectedCourse={selectedCourse}/>
       : 
       <>
       <h1>New Round</h1>
       <form onSubmit={handleSubmit}>
         <label>Course name: </label>
         <input
           type="text"
           id="course"
           name="course"
           required
           value={course}
           onChange={(e) => setCourse(e.target.value)}
         />
         <button type="submit">Submit</button>
       </form>
       {CourseOptions}
       </>
       }
    </>
  );
}
