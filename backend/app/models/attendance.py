from sqlalchemy import Column, Integer, String, Date
from app.db.session import Base

class Attendance(Base):
    __tablename__ = "attendance"
    id = Column(Integer, primary_key=True, index=True)
    emp_id = Column(String)
    date = Column(Date)
    status = Column(String)
