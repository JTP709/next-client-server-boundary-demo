import ServerComponent from "../ServerComponent";
import ClientComponent from "./ClientComponent";

export default function CompositionPage() {
  return (
    <div>
      <h1>Composition</h1>
      <p>Composition example to use Server Components as a child of a Client Component</p>
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  )
}
