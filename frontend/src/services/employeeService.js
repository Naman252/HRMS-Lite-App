import api from "./api";

export const fetchEmployees = () => api.get("/employees/");
export const addEmployee = (data) => api.post("/employees/", data);
export const deleteEmployee = (emp_id) => api.delete(`/employees/${emp_id}`);
