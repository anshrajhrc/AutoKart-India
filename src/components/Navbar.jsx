import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h2>AutoKart India</h2>
      </Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/brands">Brands</Link>
        <a href="#">Accessories</a>
        <a href="#">Offers</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;
