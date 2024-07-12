import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-2 px-2 mt-4 border-top text-white">
        <p className="col-12 text-center col-md-4 text-md-start mb-0">&copy; 2022 Company, Inc</p>

        <Link href="/" className="col-md-4 d-flex align-items-center justify-content-center link-dark text-decoration-none" style={{margin:"0px auto"}}>
          <img
            src="/assets/logo.png"
            alt="BootstrapBrain Logo"
            width="135"
            height="44"
          />
        </Link>

        <ul className="navbar navbar-dark bg-dark navbar-dark col-12 justify-content-center col-md-4 justify-content-md-end">
          <li className="nav-item"><Link to="/" className="nav-link px-2 ">Home</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link px-2 ">Sobre</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-link px-2 ">Contatos</Link></li>
          <li className="nav-item"><Link href="#" className="nav-link px-2 ">Blog</Link></li>
        </ul>
      </footer>
  );
}

export default Footer;
