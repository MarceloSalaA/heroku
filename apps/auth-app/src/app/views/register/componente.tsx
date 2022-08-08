import { FC } from 'react';
import { Link } from 'react-router-dom';
import './register.css';

export const Register: FC = () => {
  return (
    <section className="forma-registro">
      <h1>Registro</h1>
      <input
        className="cajatexto"
        type="text"
        name="name"
        id="name"
        placeholder="Name"
      />
      <input
        className="cajatexto"
        type="text"
        name="last name"
        id="last name"
        placeholder="Last name"
      />
      <input
        className="cajatexto"
        type="email"
        name="email"
        id="email"
        placeholder="Email"
      />
      <input
        className="cajatexto"
        type="password"
        name="password"
        id="password"
        placeholder="Password"
      />
      <input className="boton_registrar" type="submit" value="Registrar" />
      <p>
        ¿Ya tienes cuenta? <Link to={'/login'}>Iniciar Sesion</Link>
      </p>
    </section>
  );
};
export default Register;
