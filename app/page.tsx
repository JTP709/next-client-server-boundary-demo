"use client";

import Counter from "./Counter";
import ServerComponent from "./ServerComponent";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Counter />
      <ServerComponent />
    </main>
  );
}
