from sqlalchemy.orm import Session
from app.models.employee import Employee

def create_employee(db: Session, emp):
    db_emp = Employee(**emp.dict())
    db.add(db_emp)
    db.commit()
    db.refresh(db_emp)
    return db_emp

def get_employees(db: Session):
    return db.query(Employee).all()

def delete_employee(db: Session, emp_id: str):
    db.query(Employee).filter(Employee.emp_id == emp_id).delete()
    db.commit()