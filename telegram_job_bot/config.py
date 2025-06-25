BOT_TOKEN = "8189208621:AAHlySn2GKisCiWi7OtoWxPeDrq787QFbMM"
DB_URL = "sqlite:///jobs.db"  # Change to PostgreSQL for production

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

SQLALCHEMY_DATABASE_URL = "sqlite:///./jobs.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

from sqlalchemy import Column, Integer, String, Text
from pydantic import BaseModel

class Job(Base):
    __tablename__ = "jobs"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(Text)
    salary = Column(String)
    location = Column(String)

class JobCreate(BaseModel):
    title: str
    description: str
    salary: str
    location: str
