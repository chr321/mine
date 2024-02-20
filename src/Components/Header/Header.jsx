import React, { useContext } from "react";
import Amazon_logo from "../../assets/amazon_logo.png";
import Us_Flag from "../../assets/us-flag.jpeg";
import { FaSearch } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { BiCart } from "react-icons/bi";
import "./header.css";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebas";

function Header() {
  const [{ user, basket }, dispatch] = useContext(DataContext);

  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  // console.log(basket);

  return (
    <section className="header_fixed">
      <div className="header__container">
        <div className="header__logo">
          {/* logo */}

          <Link to="/">
            <img src={Amazon_logo} alt="Amazon Logo" />
          </Link>

          {/* delivery */}

          <div className="header__delivery">
            <span>
              <CiLocationOn />
            </span>

            <div>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        <div className="header__search">
          {/* search */}

          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" placeholder="Search Amazon" />
          <FaSearch size={38} />
        </div>

        <div className="header__order">
          <Link to="" className="header_language">
            <img src={Us_Flag} alt="us_flag" />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </Link>

          <Link to={!user && "/auth"}>
            <div>
              {user ? (
                <>
                  <h5>Hello {user?.email?.split("@")[0]}</h5>

                  <span onClick={() => auth.signOut()}>Sign Out</span>
                </>
              ) : (
                <>
                  <p>Sign In</p>

                  <span>Account & Lists</span>
                </>
              )}
            </div>
          </Link>

          <Link to="/orders">
            <p>returns</p>
            <span>& Orders</span>
          </Link>

          <Link to="/cart" className="header__cart">
            <BiCart size={50} />
            {/* <span>{basket.length}</span> */}
            <span>{totalItem}</span>
          </Link>
        </div>
      </div>

      <LowerHeader />
    </section>
  );
}

export default Header;
