import { User } from '@apoloplay/definitions';
import { UserMock } from '@apoloplay/mocks';
import { WelcomeUser } from '../../components/user/component';
import './styles.css';

export const Home = () => {
  return (
    <div className="home-container">
      <div className="welcome-container">
        <div className="title-container">
          <h1 className="title">Bienvenido</h1>
        </div>
        <div className="greetings-container">
          <WelcomeUser user={UserMock} />
          <hr className="divider" />
          <p className="message">
            Registrate o inicia sesion para comenzar a escuchar la mejor{' '}
            <b className="enphasis">musica</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
