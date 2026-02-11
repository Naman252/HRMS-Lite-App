import api from "./api";

export const markAttendance = (data) => api.post("/attendance/", data);
export const getAttendance = (emp_id) => api.get(`/attendance/${emp_id}`);
