import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="flex justify-center gap-4 bg-gray-200 p-4">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/pricing">Pricing</Link>
    </nav>
  );
}

export default Header;