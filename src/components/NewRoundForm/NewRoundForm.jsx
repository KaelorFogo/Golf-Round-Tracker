import { useEffect, useState } from "react";
import { newRound } from "../../utilities/rounds-api";

export default function NewRoundForm({ selectedCourse }) {
  const [score, setScore] = useState("");
  const [course, setCourse] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState("");
  const [teeBox, setTeeBox] = useState(selectedCourse.teeBoxes[0].tee);

  useEffect(() => {
    const currentDate = new Date().toISOString().slice(0, 10);
    setDate(currentDate);
  }, []);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      let course = selectedCourse;
      const formData = { date, course, teeBox, score, notes };
      await newRound(formData);
    } catch (err) {
      console.log(err);
    }
    setScore("");
    setCourse("");
    setNotes("");
  };

  const teeBoxOption = selectedCourse.teeBoxes.map((teeBox) => (
    <option key={teeBox.tee} value={teeBox.tee}>
      {teeBox.tee}
    </option>
  ));

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
        value={selectedCourse.name}
        onChange={(e) => setCourse(e.target.value)}
      />

      <label htmlFor="teeBox"></label>
      <select
        id="teeBox"
        name="teeBox"
        required
        onChange={(e) => setTeeBox(e.target.value)}
      >
        {teeBoxOption}
      </select>

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
