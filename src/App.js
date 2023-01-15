import React, { useEffect } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";

function App() {
  useEffect(() => {
    toast("hi");
  }, []);
  return (
    <div>
      <i className="ri-admin-line"></i>
    </div>
  );
}

export default App;
