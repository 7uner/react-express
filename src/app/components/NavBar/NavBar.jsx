import { useNavigate } from 'react-router-dom';

function NavBar({ cartNum, itemInCart }) {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="https://www.google.com/">
          <img
            src="https://reactnative.dev/img/logo-og.png"
            alt="react symbol"
            width="60"
            hegiht="40"
          ></img>
        </a>
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
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                onClick={() =>
                  navigate('/', { state: { itc: itemInCart, cn: cartNum } })
                }
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                See More
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>

            <form
              className="d-flex ms-5"
              style={{ width: '1000px' }}
              role="search"
            >
              <input
                className="form-control"
                type="search"
                placeholder="Search Product"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </ul>
          <a
            className="btn btn-outline-success"
            onClick={() =>
              navigate('/cart', { state: { itc: itemInCart, cn: cartNum } })
            }
          >
            Cart: {cartNum} items
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
