import { FC } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export const Navbar: FC = () => {
  return (
    <>
      <input type="checkbox" id="btn-menu" />
      <div className="container-menu">
        <div className="cont-menu">
          <nav>
            <Link to={'/'}>Inicio</Link>
            <Link to={'/song'}>Canciones</Link>
            <Link to={'/artist'}>Artistas</Link>
          </nav>
          <label htmlFor="btn-menu">✖️</label>
        </div>
      </div>
    </>
  );
};

export default Navbar;
