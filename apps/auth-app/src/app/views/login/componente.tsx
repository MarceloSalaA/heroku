import { FC } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

export const Login: FC = () => {
  return (
    <section className="forma-login">
      <h1>Iniciar Sesión</h1>
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
      <a href="http://localhost:4200/">
        <input className="boton_login" type="submit" value="Ingresar" />
      </a>
      <p>
        ¿No tienes cuenta? <Link to={'/register'}>Registrarse</Link>
      </p>
    </section>
  );
};
export default Login;

