"use client";

import { useState } from "react";

export default function ClientComponent({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Client Component</h2>
      <p>This is a client component that uses a server component as a child</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <p>Count: {count}</p>
      { children }
    </div>
  );
}
