import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "black", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link to="/" style={{ color: "white", fontSize: "24px", textDecoration: "none", fontFamily: "Arial" }}>
          Item Shop
        </Link>
        <div>
          <ul style={{ display: "flex", listStyleType: "none", margin: 0, padding: 0, gap: "20px" }}>
            <li>
              <Link to="/" style={{ color: "white", textDecoration: "none", fontSize: "18px" , fontFamily: "Arial" }}>
                Shop
              </Link>
            </li>
            <li>
              <Link to="/contact" style={{ color: "white", textDecoration: "none", fontSize: "18px",fontFamily: "Arial"  }}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/cart" style={{ color: "white", textDecoration: "none", fontSize: "18px",fontFamily: "Arial"  }}>
                <ShoppingCart size={24} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
