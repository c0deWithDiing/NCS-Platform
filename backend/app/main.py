from fastapi import FastAPI
from . import fake_data

app = FastAPI(title="National Secure Comms Prototype")

@app.get("/")
def root():
    return {"message": "Prototype backend is live."}

@app.get("/devices")
def devices():
    return fake_data.devices

@app.get("/alerts")
def alerts():
    return fake_data.alerts

@app.get("/traffic")
def traffic():
    return fake_data.traffic