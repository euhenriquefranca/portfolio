import React from "react";

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <i class="fas fa-code"></i>&nbsp; HENRIQUE FRANÇA
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Sobre mim
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Tecnologias
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Projetos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contatos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Redes sociais
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;