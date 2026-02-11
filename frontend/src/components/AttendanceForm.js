import { useState } from "react";
import { markAttendance } from "../services/attendanceService";

export default function AttendanceForm({ onMarked }) {
  const [form, setForm] = useState({
    emp_id: "",
    date: "",
    status: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await markAttendance(form);
    onMarked();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="emp_id"
        placeholder="Employee ID"
        value={form.emp_id}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        required
      />
      <select name="status" onChange={handleChange} required>
        <option value="">Select</option>
        <option value="Present">Present</option>
        <option value="Absent">Absent</option>
      </select>
      <button type="submit">Mark Attendance</button>
    </form>
  );
}