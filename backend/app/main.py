from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api import employee, attendance

app = FastAPI(title="HRMS Lite API")

# Root route so the base URL doesn’t return 404
@app.get("/")
def read_root():
    return {"message": "Backend API is up and running!"}

# CORS so React can talk to this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://192.168.1.4:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(employee.router, prefix="/employees")
app.include_router(attendance.router, prefix="/attendance")
