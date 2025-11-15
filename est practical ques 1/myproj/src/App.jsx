import { useState } from "react";
import "./App.css";

function Welcome({ name }) {
  return <h2>Welcome, {name ? name : "Guest"}!</h2>;
}

function App() {
  const [name, setName] = useState("");

  return (
    <>
      <h1>React Props Example</h1>

      <input
        type="text"
        placeholder="Enter your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "10px", marginBottom: "20px" }}
      />

      <Welcome name={name} />
    </>
  );
}

export default App;
