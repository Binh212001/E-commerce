import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './router/routes';
import Layout from './components/layout/Layout';
import AdminLayout from './components/adminLayout/AdminLayout';
import { useSelector } from 'react-redux';

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => {
          let CurrentLayout = Layout;
          if (route.layout === 'admin') {
            CurrentLayout = AdminLayout;
          }
          return (
            <Route
              key={index}
              path={route.path}
              element={<CurrentLayout>{route.element}</CurrentLayout>}
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
