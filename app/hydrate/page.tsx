import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import Button from "./Button";
import Todos from "./Todos";
import { getQueryClient } from "./get-query-client";
import { todoOptions } from "./useTodoQuery";

export default function HydratePage() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(todoOptions);

  return (
    <main>
      <h1>Hydrate Page</h1>
      <p>This page is a React Server Component that fetches data.</p>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Todos />
      </HydrationBoundary>
      <Button />
    </main>
  );
}