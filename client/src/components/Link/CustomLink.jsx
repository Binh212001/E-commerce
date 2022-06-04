import { Link, useResolvedPath, useMatch } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  console.log('🚀 ~ file: CustomLink.jsx ~ line 6 ~ CustomLink ~ match', match);

  return (
    <li className={match ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default CustomLink;
