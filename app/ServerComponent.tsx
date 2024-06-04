export default async function ServerComponent() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1").then(response => response.json());

  return (
    <div>
      <h2>Server Component</h2>
      <p>This component is is a React Server Component that fetches data.</p>
      <p>{ JSON.stringify(response) }</p>
    </div>
  );
}
