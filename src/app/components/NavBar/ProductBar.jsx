function ProductBar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      style={{ backgroundColor: '#e3f2fd' }}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                All
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Phones
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Tablets
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Headphones
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                New Releases
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Deals
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-disabled="true">
                Music
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default ProductBar;
