import routeConfig from '../config/router';
import Dashboard from '../pages/home/components/Dashboard';
import Cart from '../pages/cart/components/Cart';
import Product from '../pages/product/components/Product';
import Admin from '../pages/admin/components/Admin';
import Ao from '../pages/category/ao/Ao';
import Quan from '../pages/category/quan/Quan';
import Vay from '../pages/category/vay/Vay';

const routes = [
  {
    path: routeConfig.home,
    element: <Dashboard />,
    layout: 'layout',
  },
  {
    path: routeConfig.cart,
    element: <Cart />,
    layout: 'layout',
  },
  {
    path: routeConfig.product,
    element: <Product />,
    layout: 'layout',
  },
  {
    path: routeConfig.ao,
    element: <Ao />,
    layout: 'layout',
  },
  {
    path: routeConfig.quan,
    element: <Quan />,
    layout: 'layout',
  },
  {
    path: routeConfig.quan,
    element: <Quan />,
    layout: 'layout',
  },
  {
    path: routeConfig.vay,
    element: <Vay />,
    layout: 'layout',
  },
  {
    path: routeConfig.admin,
    element: <Admin />,
    layout: 'admin',
  },
];

export default routes;
