"use client";

import TodosFallback from "./TodosFallback";
import { useTodoQuery } from "./useTodoQuery";

export default function Todos() {
  const { data, isFetching } = useTodoQuery();

  return isFetching
    ? <TodosFallback />
    : (
    <div className="max-h-52 overflow-auto">
      {
        data.map((item: any) => (
          <p key={item.id}>{item.title}</p>
        ))
      }
    </div>
  );
}
