import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-2 px-2 mt-4 border-top text-white">
        <p class="col-12 text-center col-md-4 text-md-start mb-0">&copy; 2022 Company, Inc</p>

        <Link href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <img
            src="/assets/logo.png"
            alt="BootstrapBrain Logo"
            width="135"
            height="44"
          />
        </Link>

        <ul class="navbar navbar-dark bg-dark navbar-dark col-12 justify-content-center col-md-4 justify-content-md-end">
          <li class="nav-item"><Link to="/" class="nav-link px-2 ">Home</Link></li>
          <li class="nav-item"><Link to="/about" class="nav-link px-2 ">Sobre</Link></li>
          <li class="nav-item"><Link to="/contact" class="nav-link px-2 ">Contatos</Link></li>
          <li class="nav-item"><Link href="#" class="nav-link px-2 ">Blog</Link></li>
        </ul>
      </footer>
  );
}

export default Footer;
