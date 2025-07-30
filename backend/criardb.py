from db import base, engine
from modelos import Produto

base.metadata.create_all(bind=engine)