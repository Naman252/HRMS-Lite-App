from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import SessionLocal
from app.schemas.attendance import AttendanceCreate, Attendance
from app.crud.attendance import mark_attendance, get_attendance

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=Attendance)
def add_att(att: AttendanceCreate, db: Session = Depends(get_db)):
    return mark_attendance(db, att)

@router.get("/{emp_id}", response_model=list[Attendance])
def list_att(emp_id: str, db: Session = Depends(get_db)):
    return get_attendance(db, emp_id)