"use client";

import { useTodoQuery } from "./useTodoQuery";

export default function Button() {
  const { refetch } = useTodoQuery();
  const handleClick = () => {
    refetch();
  };

  return (
    <button onClick={handleClick}>Click me!</button>
  );
}
