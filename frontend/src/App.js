import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import AttendanceForm from "./components/AttendanceForm";
import AttendanceList from "./components/AttendanceList";

function App() {
  return (
    <div>
      <h1>HRMS Lite</h1>

      <h2>Employees</h2>
      <EmployeeForm onAdded={() => {}} />
      <EmployeeList />

      <hr />

      <h2>Attendance</h2>
      <AttendanceForm onMarked={() => {}} />
      <AttendanceList />
    </div>
  );
}

export default App;
