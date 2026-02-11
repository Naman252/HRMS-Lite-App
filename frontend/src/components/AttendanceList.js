import { useState } from "react";
import { getAttendance } from "../services/attendanceService";

export default function AttendanceList() {
  const [empID, setEmpID] = useState("");
  const [records, setRecords] = useState([]);

  const loadRecords = async () => {
    const res = await getAttendance(empID);
    setRecords(res.data);
  };

  return (
    <div>
      <input
        placeholder="Employee ID"
        value={empID}
        onChange={(e) => setEmpID(e.target.value)}
      />
      <button onClick={loadRecords}>Get Attendance</button>

      {records.map((r) => (
        <div key={r.id}>
          {r.date} — {r.status}
        </div>
      ))}
    </div>
  );
}
