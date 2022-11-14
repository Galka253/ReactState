import React from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import Profile from "./Profile";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="d-grid gap-2">
      <button variant="primary" size="lg" onClick={() => setShow(!show)}>
        {show ? "Hide Profile" : "Show Profile"}
      </button>
      {show && <Profile />}
    </div>
  );
}
