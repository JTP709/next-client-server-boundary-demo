export default function NavBar() {
  return (
    <nav className="mr-4">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/composition">Composition</a>
        </li>
        <li>
          <a href="/hydrate">Hydrate</a>
        </li>
        <li>
          <a href="/refresh">Refresh</a>
        </li>
      </ul>
    </nav>
  );
}