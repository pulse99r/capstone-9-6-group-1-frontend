import { Link } from "react-router-dom";
import './NavBar.css'
import Logo from "../assets/logo.png"

export default function NavBar() {
  return (
<div className="nav_bar">

<Link to={`/`}>
{<img className="logo" src={Logo} alt="Logo" />}
</Link>
  <nav>
    <ul className="nav_links">
      <li> <a href ="/forum"> Forum</a> </li>
      <li> <a href ="/articles"> Articles</a> </li>
      <li> <a href ="/about"> About </a> </li>
      <li> <a href ="/mission"> Mission</a> </li>
      <li> <a href ="/contact"> Contact</a></li>
      <li style ={{float:"right"}}> <a href ="/signup"> Sign Up</a> </li>
      <li style ={{float:"right"}}> <a  href="/login"> Login</a> </li>
    </ul>
  </nav>
</div>  );
}