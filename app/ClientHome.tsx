"use client";

import { useEffect } from "react";
import Counter from "./Counter";
import ServerComponent from "./ServerComponent";

export default function ClientHome() {
  useEffect(() => {
    console.log("Client Home Component Mounted");
  }, []);

  return (
    <div>
      <h2>Client Home</h2>
      <p>Welcome to the client home page!</p>
      <Counter />
      <ServerComponent />
    </div>
  );
}