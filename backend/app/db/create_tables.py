from app.db.session import engine, Base
from app.db.base import *
Base.metadata.create_all(bind=engine)
