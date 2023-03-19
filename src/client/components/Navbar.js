import { ReactComponent as HomeIcon } from '../assets/homeicon.svg';
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <footer className='navbar bg-slate-300'>
      <nav className='navbarNav flex justify-between w-100 p-2'>
      <div className="logo"><h1 className='navbarListItem p-3 tracking-wider'>POPFLIX</h1></div>
      <div className="nav-links">
        <ul className='navbarListItems flex gap-x-4'>    
          <li className='navbarListItem p-3 hover:bg-sky-100' onClick={() => navigate('/')}>
            <p
              className='cursor-default'
              // {
              //   pathMatchRoute('/')
              //     ? 'navbarListItemNameActive'
              //     : 'navbarListItemName'
              // }
            >
              Home
            </p>
          </li>

          <li className='navbarListItem p-3 hover:bg-sky-100' onClick={() => navigate('/about')}>
            <p
              className={
                pathMatchRoute('/about')
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              About
            </p>
          </li>

          <li className='navbarListItem p-3 hover:bg-sky-100' onClick={() => navigate('/tv-shows')}>
            <p
              className={
                pathMatchRoute('/tv-shows')
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Tv Shows
            </p>
          </li>

          <li className='navbarListItem p-3 hover:bg-sky-100' onClick={() => navigate('/movies')}>
            <p
              className={
                pathMatchRoute('/movies')
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Movies
            </p>
          </li>
        </ul>
        </div>
        <div className="account flex gap-x-5">
        <ul className='navbarListItems flex gap-x-5'>    
          <li className='navbarListItem p-3 hover:bg-sky-100' onClick={() => navigate('/signup')}>
            <p
              className={
                pathMatchRoute('/signup')
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Sign up
            </p>
          </li>

          <li className='navbarListItem p-3 hover:bg-sky-100' onClick={() => navigate('/login')}>
            <p
              className={
                pathMatchRoute('/login')
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Log in
            </p>
          </li>
        </ul>
        </div>
      </nav>
    </footer>
  );
}

export default Navbar;
