from sqlalchemy.orm import Session
from app.models.attendance import Attendance

def mark_attendance(db: Session, att_data):
    db_att = Attendance(**att_data.dict())
    db.add(db_att)
    db.commit()
    db.refresh(db_att)
    return db_att

def get_attendance(db: Session, emp_id: str):
    return db.query(Attendance).filter(Attendance.emp_id == emp_id).all()