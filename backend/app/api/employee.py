from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import SessionLocal
from app.schemas.employee import EmployeeCreate, Employee
from app.crud.employee import create_employee, get_employees, delete_employee

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=Employee)
def add_employee(emp: EmployeeCreate, db: Session = Depends(get_db)):
    return create_employee(db, emp)

@router.get("/", response_model=list[Employee])
def list_employees(db: Session = Depends(get_db)):
    return get_employees(db)

@router.delete("/{emp_id}")
def remove_employee(emp_id: str, db: Session = Depends(get_db)):
    delete_employee(db, emp_id)
    return {"detail": "Deleted"}