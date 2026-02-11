import { useState } from "react";
import { fetchEmployees, deleteEmployee } from "../services/employeeService";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [visible, setVisible] = useState(false);

  const handleToggle = async () => {
    if (!visible) {
      // Only fetch when showing
      const res = await fetchEmployees();
      setEmployees(res.data);
      setVisible(true);
    } else {
      // If already visible, hide
      setVisible(false);
    }
  };

  const handleDelete = async (emp_id) => {
    await deleteEmployee(emp_id);
    if (visible) {
      // Refresh list if visible
      const res = await fetchEmployees();
      setEmployees(res.data);
    }
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {visible ? "Hide Employees" : "Show Employees"}
      </button>

      {visible && (
        <div>
          {employees.map((emp) => (
            <div key={emp.id}>
              {emp.full_name} ({emp.emp_id}) — {emp.department}
              <button onClick={() => handleDelete(emp.emp_id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
