import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { loader as menuLoader } from './features/menu/Menu';
import { loader as orderLoader } from './features/order/Order';
import { action as UpdateOrderAction } from './features/order/UpdateOrder';
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder';

// import Menu from './features/menu/Menu';
// import Cart from './features/cart/Cart';
// import Order from './features/order/Order';
// import AppLayout from './ui/AppLayout';
// import Home from './ui/Home';
import Error from './ui/Error';
import Loader from './ui/Loader';

// lazy loading
const Menu = lazy(() => import('./features/menu/Menu'));
const Cart = lazy(() => import('./features/cart/Cart'));
const Order = lazy(() => import('./features/order/Order'));
const AppLayout = lazy(() => import('./ui/AppLayout'));
const Home = lazy(() => import('./ui/Home'));

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: UpdateOrderAction,
      },
    ],
  },
]);
const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
