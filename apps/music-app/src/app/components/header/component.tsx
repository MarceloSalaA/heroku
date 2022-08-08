import './header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="btn-menu">
          <label htmlFor="btn-menu">☰</label>
        </div>
        <div className="logo">
          <h1>Note Block</h1>
        </div>
        <nav className="menu">
          <a href="#">Salir</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
