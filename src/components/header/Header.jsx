import './Header.css';
import { Link } from 'react-router-dom';

// routing links are located in the header, components display in <App/>
function Header() {

  return <header>

    <Link to="/">
      <div className="parallelogram">
        INOVOTECH
      </div>
    </Link>

    <div className="button-wrapper">
    <Link to="/" >
      <button> Home </button>
    </Link>
    </div>

    <div className="button-wrapper">
    <Link to="/contact" >
      <button> Contact </button>
    </Link>
    </div>

  </header>
};

export default Header;