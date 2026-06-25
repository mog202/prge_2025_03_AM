from fastapi import APIRouter
from sqlalchemy import text
from pydantic import BaseModel
from app.shared_lib.prge_shared.db_conn import engine
from app.shared_lib.prge_shared.spatial import get_coordinates

router_patients = APIRouter()

class PatientData(BaseModel):
    name_patient: str
    gender: str
    phone: str
    location: str
    pesel: str  # Jako str, pasuje do varchar(11)

# Endpoint dodawania pacjenta
@router_patients.post("/insert_patients")
async def insert_patients(patient: PatientData):
    try:
        coords = get_coordinates(patient.location)
        lat = coords[0]
        lng = coords[1]

        params = {
            "name_patient": patient.name_patient,
            "gender": patient.gender,
            "phone": patient.phone,
            "location": patient.location,
            "pesel": patient.pesel,
            "lat": lat,
            "lng": lng
        }

        sql_query = text("""
            INSERT INTO patients (name_patient, gender, phone, location, pesel, geom) 
            VALUES (:name_patient, :gender, :phone, :location, :pesel, 'SRID=4326;POINT(:lng :lat)');
        """)

        with engine.connect() as connection:
            connection.execute(sql_query, params)
            connection.commit()

        return {"status": "success", "message": "Pacjent został dodany"}
    except Exception as e:
        return {"status": f"error {str(e)}"}

# Endpoint pobierania listy pacjentów
@router_patients.get("/patients_dynamic")
async def get_patients():
    try:
        sql_query = text("""SELECT id, name_patient, gender, phone, location, pesel FROM patients""")

        with engine.connect() as connection:
            result = connection.execute(sql_query)
            patients = [dict(row._mapping) for row in result]

        return {"status": "success", "data": patients}
    except Exception as e:
        return {"status": f"error {str(e)}"}