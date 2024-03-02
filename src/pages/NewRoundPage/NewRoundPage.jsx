import { getCourse } from "../../utilities/courses-api";
import { useState } from "react";
import "./NewRoundPage.css";
import NewRoundForm from "../../components/NewRoundForm/NewRoundForm";

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
    <button onClick={() => setSelectedCourse(course)}>
      <div className="newCard" key={course._id}>
        <div className="newCard-content">
          <h2>{course.name}</h2>
          <h3>
            {course.city}, {course.state}
          </h3>
        </div>
      </div>
    </button>
  ));

  return (
    <>
      {selectedCourse ? (
        <NewRoundForm selectedCourse={selectedCourse} />
      ) : (
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
      )}
    </>
  );
}
