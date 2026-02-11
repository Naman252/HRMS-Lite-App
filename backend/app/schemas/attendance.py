from pydantic import BaseModel
from datetime import date

class AttendanceCreate(BaseModel):
    emp_id: str
    date: date
    status: str

class Attendance(BaseModel):
    id: int
    emp_id: str
    date: date
    status: str

    class Config:
        orm_mode = True