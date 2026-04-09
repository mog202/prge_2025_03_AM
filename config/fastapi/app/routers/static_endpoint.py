from fastapi import APIRouter

router = APIRouter()

@router.get("/user")
async def get_user():
    return [{"id":1, "name":"Adam","location":"Szczecin","ports": "123"},
            {"id": 2, "name": "Rafal", "location": "Turek", "ports": "1234"},
            {"id":3, "name":"piotr","location":"Garwolin","ports": "12345"},
            {"id":4, "name":"aleks","location":"Bial","ports": "123456"},
            {"id":5, "name":"goo","location":"Neer","ports": "1234567"}]


