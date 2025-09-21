devices = [
    {"id": 1, "name": "Device-001", "attestation": "verified", "region": "Juba"},
    {"id": 2, "name": "Device-002", "attestation": "unverified", "region": "Bor"},
    {"id": 3, "name": "Device-003", "attestation": "verified", "region": "Wau"},
]

alerts = [
    {"id": 1, "message": "Unauthorized device detected near Bor", "region": "Bor"},
    {"id": 2, "message": "Broadcast: Stay alert for network disruptions", "region": "National"},
]

traffic = [
    {"time": "10:00", "messages": 120},
    {"time": "10:05", "messages": 80},
    {"time": "10:10", "messages": 150},
]