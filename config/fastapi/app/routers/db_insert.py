from fastapi import APIRouter
from sqlalchemy import create_engine, text
from pydantic import BaseModel

from app.settings import db_name, db_user, db_password
from app.shared_lib.prge_shared.db_conn import engine
from app.shared_lib.prge_shared.spatial import get_coordinates

router_db_insert = APIRouter()

class UserData(BaseModel):
    name: str
    posts: int
    location: str

@router_db_insert.post("/insert_users")
async def insert_users(user:UserData):
    try:


        params = {"name": user.name,
                  "posts": user.posts,
                  "location": user.location,
                  "lat": get_coordinates(user.location)[0],
                  "lng": get_coordinates(user.location)[1]
                  }

        sql_query = text("""insert into users (name, posts, location, geom) 
                            values (:name, :posts, :location, 'SRID=4326;POINT(:lng :lat)');
                         """)

        with engine.connect() as connection:
            results = connection.execute(sql_query, params)
            connection.commit()
            print(results)

        return {"status": "success", "data_inserted": {user.name,user.posts,user.location}}


    except Exception as e:
        return {"status": f"error {str(e)}"}
