import logo from '../logo.svg';
import '../style.css';


export default function Header() {
    return (
        <nav>
                <img src={logo} className="nav-logo" alt="logo"  />
                <h1 className='nav-title'> My reactive world</h1>
                <ul className="nav-items">
                    <li>About</li>
                    <li>Skills</li>
                    <li>Contact</li>
                </ul>
        </nav>
    )
}