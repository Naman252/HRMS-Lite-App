from pydantic import BaseModel, EmailStr

class EmployeeCreate(BaseModel):
    emp_id: str
    full_name: str
    email: EmailStr
    department: str

class Employee(BaseModel):
    id: int
    emp_id: str
    full_name: str
    email: str
    department: str

    class Config:
        orm_mode = True