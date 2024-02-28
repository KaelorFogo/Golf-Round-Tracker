import { useEffect, useState } from "react";
import { newRound } from "../../utilities/rounds-api";
import { getCourse } from "../../utilities/courses-api";

export default function NewRoundForm() {
  const [score, setScore] = useState("");
  const [course, setCourse] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const currentDate = new Date().toISOString().slice(0, 10);
    setDate(currentDate);
  }, []);

  const handleCourseAPI = async () => {
    const courseApi = await getCourse(course);
    return courseApi;
  };
  
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const course = await handleCourseAPI();
    try {
      const formData = { date, course, score, notes };
      console.log(formData);
      await newRound(formData);
    } catch (err) {
      console.log(err);
    }
    setScore("");
    setCourse("");
    setNotes("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Date</label>
      <input
        type="date"
        id="date"
        name="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <label htmlFor="course">Course</label>
      <input
        type="text"
        id="course"
        name="course"
        required
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <label htmlFor="score">Score</label>
      <input
        type="number"
        id="score"
        name="score"
        required
        min="56"
        max="999"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />

      <label htmlFor="notes">Notes</label>
      <textarea
        id="notes"
        name="notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      ></textarea>

      <button type="submit">Submit</button>
    </form>
  );
}