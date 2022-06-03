import routeConfig from '../config/router';
import Dashboard from '../pages/home/components/Dashboard';
import Cart from '../pages/cart/components/Cart';
import Product from '../pages/product/components/Product';
import Admin from '../pages/admin/components/Admin';
import Category from '../pages/category/components/Category';

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
    path: routeConfig.category,
    element: <Category />,
    layout: 'layout',
  },
  {
    path: routeConfig.admin,
    element: <Admin />,
    layout: 'admin',
  },
];

export default routes;
