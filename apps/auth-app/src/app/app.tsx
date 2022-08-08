import {
  Location,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import Login from './views/login/componente';
import Register from './views/register/componente';
import './styles.css';
import { useEffect } from 'react';
export function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/login' && location.pathname !== '/register')
      navigate('/login');
  }, [location]);

  return (
    <div className="container">
      <div className="app">
        <div className="content-app">
          <div className="img-background">
            <img
              className="app-logo"
              src="https://cdn-icons-png.flaticon.com/512/2238/2238185.png"
              alt="noteblock-img"
            />
          </div>
          <p className="app-name">
            Apolo<p className="app-name-play">▶</p>
          </p>
        </div>
      </div>
      <Routes>
        <Route path={'/register'} element={<Register />}></Route>
        <Route path={'/login'} element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
