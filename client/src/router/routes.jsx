import routeConfig from '../config/router';
import Dashboard from '../pages/home/components/Dashboard';
import Cart from '../pages/cart/components/Cart';
import Admin from '../pages/admin/components/Admin';
import Ao from '../pages/category/ao/Ao';
import Quan from '../pages/category/quan/Quan';
import Vay from '../pages/category/vay/Vay';
import ProductDetail from '../pages/product/components/ProductDetail';
import Search from '../pages/search/Search';
import Auth from '../pages/auth/Auth';

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
    path: routeConfig.productdetail,
    element: <ProductDetail />,
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
    path: routeConfig.vay,
    element: <Vay />,
    layout: 'layout',
  },
  {
    path: routeConfig.admin,
    element: <Admin />,
    layout: 'admin',
  },
  {
    path: routeConfig.search,
    element: <Search />,
    layout: 'layout',
  },
  {
    path: routeConfig.auth,
    element: <Auth />,
    layout: 'layout',
  },
];

export default routes;
