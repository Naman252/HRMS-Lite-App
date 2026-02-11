from sqlalchemy import Column, Integer, String
from app.db.session import Base

class Employee(Base):
    __tablename__ = "employees"
    id = Column(Integer, primary_key=True, index=True)
    emp_id = Column(String, unique=True, index=True)
    full_name = Column(String)
    email = Column(String, unique=True)
    department = Column(String)
