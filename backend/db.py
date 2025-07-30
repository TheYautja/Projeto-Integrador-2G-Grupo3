from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
import os
from dotenv import load_dotenv

load_dotenv()
BANCO =os.getenv("BANCO_URL")

engine= create_engine(BANCO)
sessaoLCL = sessionmaker(autoflush=False, autocommit=False, bind=engine)
base = declarative_base()