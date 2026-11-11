import { Link } from "react-router-dom";
import "../styles/Nav.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <section>
        <Link to="/">Login</Link>
        <Link to="/sobre">Sobre</Link>
      </section>
    </nav>
  );
}