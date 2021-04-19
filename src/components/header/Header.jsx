import './Header.css';
import { Link, Route, Switch } from 'react-router-dom';
import LandingPage from '../landingPage/LandingPage';
import Contact from '../contact/Contact.jsx';

function Header() {

  return <header>

    <div className="parallelogram">INOVOTECH</div>

    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>

    <Route path="/"> <LandingPage/> </Route>
    <Route path="/contact"> <Contact/> </Route>

  </header>
};

export default Header;