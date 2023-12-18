import { Link } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {

  return (
    <>
      <header>
        <a href="/#Home"><h1 className="logo-top">PRASANG</h1></a>
        <input type="checkbox"  id='check'/>
        <label htmlFor="check" className='menu-icon'>
        <i className="fa fa-bars menu " aria-hidden="true" id='menu'></i>
        <i className="fa fa-times" aria-hidden="true"id='close'></i>
        </label>
        
        <div className="navigation">
          <a href='/#Home'>Home</a>
          <a href='/#Workshops'>Workshops</a>
          <a href="/#Events">Events</a>
          <a href='/#Merchandize'>Merchandize</a>
          <a href="/OurTeam">Our Team</a>
        </div>
      </header>
    </>
  );
}

export default Navbar;
