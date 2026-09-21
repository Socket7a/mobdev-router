import {Link, NavLink, useNavigate} from "react-router-dom";
export default function Header({ currentPage, onNavigate, onSearch }) {
  const navigate = useNavigate()

  function handleSearchKeyDown(e) {
    if (e.key === 'Enter' && e.target.value.trim()) {
    navigate("/search?q=" + encodeURIComponent(e.target.value.trim()))
    e.target.value = '';
    }
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link
          to="/"
          className="brand"
          // onClick={e => { e.preventDefault(); onNavigate('home'); }}
        >
          <div className="brand-mark">t</div>
          <div className="brand-name">Terra</div>
        </Link>

        <nav className="main-nav">
          <NavLink className={({isActive}) => `nav-link${isActive ? " active" : ""}`} to="/" label="Главная">Главная</NavLink>
          <NavLink className={({isActive}) => `nav-link${isActive ? " active" : ""}`} to = "/catalog" label="Каталог">Каталог</NavLink>
          <NavLink className={({isActive}) => `nav-link${isActive ? " active" : ""}`} to = "/about" label="О нас">О нас</NavLink>
          <NavLink className={({isActive}) => `nav-link${isActive ? " active" : ""}`} to = "/contacts" label="Контакты">Контакты</NavLink>
        </nav>

        <div className="header-search">
          <input type="text" placeholder="Найти растение..." onKeyDown={handleSearchKeyDown} />
        </div>
      </div>
    </header>
  );
}

function NavItem({ label, page, currentPage, onNavigate }) {
  return (
    <a
      href={'/' + (page === 'home' ? '' : page)}
      className={'nav-link' + (currentPage === page ? ' active' : '')}
      onClick={e => { e.preventDefault(); onNavigate(page); }}
    >
      {label}
    </a>
  );
}
