import { AuthProvider } from "./context/AuthContext";
import { DevicesProvider } from "./context/DevicesContext";
import { AlertsProvider } from "./context/AlertsContext";

function App() {
  return (
    <AuthProvider>
      <DevicesProvider>
        <AlertsProvider>
          {/* your routes/components here */}
        </AlertsProvider>
      </DevicesProvider>
    </AuthProvider>
  );
}

export default App;