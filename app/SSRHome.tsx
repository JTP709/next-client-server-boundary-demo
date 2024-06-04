import Counter from "./Counter";
import ServerComponent from "./ServerComponent";

export default function SSRHome() {
  return (
    <div>
      <h2>Server-Side Rendered Home</h2>
      <p>Welcome to the server-side rendered home page!</p>
      <Counter />
      <ServerComponent />
    </div>
  );
}