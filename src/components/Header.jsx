import { Link } from 'react-router-dom';
import '../assets/header.css'; // Import the CSS file

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">My Portfolio</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;