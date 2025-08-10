import { useRoutes } from 'react-router-dom';
import { AuthProvider } from './AuthContext'
import Routes from './Routes';
import './App.css';

function App() {

  const router = useRoutes(Routes);

  return (
    <>
      <AuthProvider>
        {router}
      </AuthProvider>
    </>
  );
}

export default App;
