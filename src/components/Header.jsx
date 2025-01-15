import { Link } from 'react-router-dom';
import '../assets/index.css'; // Import the CSS file

const Header = ({ theme }) => {
  return (
    <header className={`header ${theme}`}>
      <nav className="nav-container">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;