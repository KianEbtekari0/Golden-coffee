import Main from './components/Main/Main';
import MainProduct from './components/MainProduct/MainProduct';
import NotFound from './components/NotFound/NotFound';

let router = [
    {path: '/', element: <Main />},
    {path: '/product/:id', element: <MainProduct />},
    {path: "*", element: <NotFound />},   
]

export default router;