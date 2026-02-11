import { useState } from "react";
import { addEmployee } from "../services/employeeService";

export default function EmployeeForm({ onAdded }) {
  const [form, setForm] = useState({
    emp_id: "",
    full_name: "",
    email: "",
    department: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addEmployee(form);
    onAdded();
    setForm({ emp_id: "", full_name: "", email: "", department: "" });
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
        name="full_name"
        placeholder="Full Name"
        value={form.full_name}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        name="department"
        placeholder="Department"
        value={form.department}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Employee</button>
    </form>
  );
}
