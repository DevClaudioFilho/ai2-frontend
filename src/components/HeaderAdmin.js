import { Link } from "react-router-dom";

function HeaderAdmin() {
  return (
    <nav className="navbar navbar-light navbar-expand-md bg-light bsb-navbar bsb-navbar-hover bsb-navbar-caret">
      <div className="container">
        <Link className="navbar-brand" to="/admin">
          <img
            src="/assets/logo.png"
            alt="BootstrapBrain Logo"
            width="135"
            height="44"
          />
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        <div
          className="offcanvas offcanvas-end bg-light"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Navegação
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 ">
            <li className="nav-item ">
                <Link
                  to="/admin/post"
                  className="nav-link"
                  aria-current="page"
                >
                  Post
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  to="/admin/banner"
                  className="nav-link"
                  aria-current="page"
                >
                  Banner
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  to="/admin/system"
                  className="nav-link"
                  aria-current="page"
                >
                  Sistemas
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  to="/admin/book"
                  className="nav-link"
                  aria-current="page"
                >
                  Livros
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeaderAdmin;
