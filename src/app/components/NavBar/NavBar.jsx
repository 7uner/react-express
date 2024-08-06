<<<<<<< Updated upstream
function NavBar() {
=======
import { useNavigate } from 'react-router-dom';

function NavBar({ cartNum, itemInCart }) {
  const navigate = useNavigate();

>>>>>>> Stashed changes
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Brand</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
          </ul>
<<<<<<< Updated upstream
          <a className="btn btn-outline-success" href="/cart">
            Cart
=======
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <a
            className="btn btn-outline-success"
            onClick={() =>
              navigate('/cart', { state: { itc: itemInCart, cn: cartNum } })
            }
          >
            Cart: {cartNum} items
>>>>>>> Stashed changes
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
xw