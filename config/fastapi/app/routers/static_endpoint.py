from fastapi import APIRouter

router = APIRouter()

@router.get("/user_staic")
async def get_user():
    return [{"id":1, "name":"Adam","location":"Szczecin","posts": "123"},
            {"id": 2, "name": "Rafal", "location": "Turek", "posts": "1234"},
            {"id":3, "name":"piotr","location":"Garwolin","posts": "12345"},
            {"id":4, "name":"aleks","location":"Bial","posts": "123456"},
            {"id":5, "name":"gooo","location":"Neer","posts": "1234567"}]


