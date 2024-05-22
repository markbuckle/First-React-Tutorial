import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  // make it so that the Alert is initially hidden
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

// export App component so it can be used somewhere else
export default App;
