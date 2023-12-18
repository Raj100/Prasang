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
          <a href='/#Home' style={{ '--i': '0' }}>Home</a>
          <a href='/#Workshops' style={{ '--i': '1' }}>Workshops</a>
          <a href="/#Events"  style={{ '--i': '2' }}>Events</a>
          <a href='/#Merchandize' style={{ '--i': '3' }}>Merchandize</a>
          <a href="/OurTeam"  style={{ '--i': '4' }}>Our Team</a>
        </div>
      </header>
    </>
  );
}

export default Navbar;
