import Main from './pages/Main/Main';
import MainProduct from './components/MainProduct/MainProduct';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';

let router = [
    {path: '/', element: <Main />},
    {path: '/product/:id', element: <MainProduct />},
    {path: '/login', element: <Login />},
    {path: '/signup', element: <SignUp />},
    {path: "*", element: <NotFound />},
]

export default router;
