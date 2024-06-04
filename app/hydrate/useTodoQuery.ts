import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";

export const todoOptions = queryOptions({
  queryKey: ["todos"],
  queryFn: async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return response.json();
  },
});

export const useTodoQuery = () => {
  return useSuspenseQuery(todoOptions);
};
