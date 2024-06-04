"use client";

import { useRouter } from "next/navigation";

export default function Button() {
  const router = useRouter();
  const handleClick = () => {
    router.refresh();
  };

  return (
    <button onClick={handleClick}>Click me!</button>
  );
}
