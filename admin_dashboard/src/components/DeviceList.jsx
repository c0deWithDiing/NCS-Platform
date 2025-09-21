import { useDevices } from "../context/DevicesContext";
import { Button } from "@/components/ui/button";

export default function DeviceList() {
  const { devices, verifyDevice, removeDevice } = useDevices();

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Device Management</h3>
      <ul className="space-y-2">
        {devices.map((device) => (
          <li
            key={device.id}
            className="flex items-center justify-between bg-gray-700 px-3 py-2 rounded"
          >
            <span className={device.verified ? "text-green-400" : "text-red-400"}>
              {device.name} — {device.verified ? "Verified" : "Unverified"}
            </span>
            <div className="space-x-2">
              {!device.verified && (
                <Button size="sm" onClick={() => verifyDevice(device.id)}>
                  Verify
                </Button>
              )}
              <Button
                size="sm"
                variant="destructive"
                onClick={() => removeDevice(device.id)}
              >
                Remove
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}