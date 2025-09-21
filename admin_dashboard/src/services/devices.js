import API from "./api";

export const fetchDevices = async () => {
    const response = await API.get("/devices");
};