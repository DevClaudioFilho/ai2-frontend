import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'

import api from '../utils/api'
import authHeader from '../utils/auth/auth.header'
import { Button } from 'bootstrap/dist/js/bootstrap.bundle.min'
import { logout } from '../utils/auth/auth.service'

export default function Header() {
  const [systems, setSystems] = useState([])
  const [userHeader, setUserHeader] = useState()

  useEffect(() => {
    api.get(`/system/list`)
    .then((res) => {
      setSystems(res.data)
    })
    .catch((err) => {
      console.error(`Error: ${err}` )
    })
  }, [])

  useEffect(() => {
    api.get(`/user/current`, {headers: authHeader()})
    .then((res) => {
      if(res.data.success===false){
        return
      }
      else{
        setUserHeader(res.data)
      }
    })
    .catch((err) => {
      console.error(`Error: ${err}` )
    })

  }, [])

  return (
    <nav className="navbar navbar-dark navbar-expand-md bg-dark bsb-navbar bsb-navbar-hover bsb-navbar-caret">
      <div className="container">
        <Link className="navbar-brand" to="/">
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
          className="offcanvas offcanvas-end bg-dark"
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
                  to="about"
                  className="nav-link"
                  aria-current="page"
                >
                  Sobre
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle" 
                  href="#" 
                  id="navbarDarkDropdownMenuLink" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  Sistemas
                </a>
                <ul 
                  className="dropdown-menu dropdown-menu-dark" 
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  {
                    systems.map((system) => {
                      return (
                        <li key={system.id}>
                          <Link className="dropdown-item" to={`/system/${system.id}`}>{system.title}</Link>
                        </li>
                      )
                    })
                  }
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle" 
                  href="#" 
                  id="navbarDarkDropdownMenuLink" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  Ferramentas
                </a>
                <ul 
                  className="dropdown-menu dropdown-menu-dark" 
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li><Link className="dropdown-item" to="https://discord.com/">Discord</Link></li>
                  <li><Link className="dropdown-item" to="https://roll20.net/">Roll 20</Link></li>
                  <li><Link className="dropdown-item" to="https://firecast.app/pt_br/features/">Firecast</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact">
                  Contatos
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle" 
                  href="#" 
                  id="navbarDarkDropdownMenuLink" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  <img 
                    src={userHeader ? userHeader.avatar: "https://th.bing.com/th/id/OIP.PT_eYfdZc55ShZAIiFn9jAHaEK?w=324&h=182&c=7&r=0&o=5&pid=1.7"} 
                    alt="" 
                    className="bg-primary " width={40} height={40} style={{borderRadius:"50%"}}
                  />
                </a>
                <ul 
                  className="dropdown-menu dropdown-menu-dark"
                  style={{left:"-100px"}} 
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  {userHeader? <li><Link className="dropdown-item" to="perfil">Perfil</Link></li>:
                    <li><Link className="dropdown-item" to="login">Login</Link></li>
                  }
                  {userHeader ? <li><a className="dropdown-item" onClick={()=>logout()}>Log out</a></li>:null}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
