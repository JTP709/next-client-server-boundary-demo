import { Suspense } from "react";
import Button from "./Button";
import Todos from "./Todos";
import TodosFallback from "./TodosFallback";

export default function RefreshPage() {
  return (
    <main>
      <h1>Refresh Data</h1>
      <p>Perform a client side action that causes the server to refetch</p>
      <Suspense fallback={<TodosFallback />}>
        <Todos />
      </Suspense>
      <Button />
    </main>
  );
}