from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, Text, DateTime
from sqlalchemy.orm import sessionmaker, declarative_base
from datetime import datetime
from telegram_job_bot.config import DB_URL

Base = declarative_base()
engine = create_engine(DB_URL)
Session = sessionmaker(bind=engine)
session = Session()

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    telegram_id = Column(Integer, unique=True)
    name = Column(String)
    role = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)

class Job(Base):
    __tablename__ = 'jobs'
    id = Column(Integer, primary_key=True)
    employer_id = Column(Integer, ForeignKey('users.id'))
    title = Column(String)
    description = Column(Text)
    salary = Column(String)
    location = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)

class Application(Base):
    __tablename__ = 'applications'
    id = Column(Integer, primary_key=True)
    job_id = Column(Integer, ForeignKey('jobs.id'))
    user_id = Column(Integer, ForeignKey('users.id'))
    message = Column(Text)
    applied_at = Column(DateTime, default=datetime.utcnow)

def init_db():
    Base.metadata.create_all(engine)

def add_user(telegram_id, name, role):
    if not session.query(User).filter_by(telegram_id=telegram_id).first():
        user = User(telegram_id=telegram_id, name=name, role=role)
        session.add(user)
        session.commit()
