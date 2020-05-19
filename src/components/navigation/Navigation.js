import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import citrics from "./citrics-mock-dark.png";
import signInLock from "./signInLockDark.png";
import { UserContext } from "../../contexts/UserContext";
import { actionColor, navGrey } from "../../utils/cityColors.js";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import "./Navigation.scss";

import { useDispatch } from "react-redux";
import { clearAllCities } from "../../redux/actions/cityActions.js";

function Navigation() {
  const history = useHistory();

  const { user, setUserValue, setFavorites } = useContext(UserContext);
  const dispatch = useDispatch();

  const mobile = useMediaQuery("(max-width:600px)");

  const Logout = () => {
    setUserValue(null);
    setFavorites([]);
    dispatch(clearAllCities());
    localStorage.setItem("user", null);
    localStorage.setItem("jwt", null);

    history.push("/signin");
  };

  return (
    <div className={"navigation-container " + "default-color" + `main-nav`}>
      <a className="header-logo" href="/">
        {" "}
        <img className="mock-logo" src={citrics} alt="logo" />
      </a>
      <nav className="main-nav">
        {mobile ? (
          <></>
        ) : (
          <>
            <Link to="/" className="nav-button" style={{ color: navGrey }}>
              Home
            </Link>

            <Link
              to="/compare"
              className="nav-button"
              style={{ color: navGrey }}
            >
              Compare
            </Link>

            {user == null ? (
              <>
                <Link
                  className="login-link"
                  to="/signin"
                  style={{ color: actionColor }}
                >
                  <img className="lock" alt="lock" src={signInLock} />
                  Log In
                </Link>
              </>
            ) : (
              <>
                <Link style={{ color: navGrey }} to="/profile">
                  Profile
                </Link>

                <Link
                  className="login-link"
                  style={{ color: navGrey }}
                  onClick={() => Logout()}
                >
                  <img className="lock" alt="lock" src={signInLock} />
                  Logout
                </Link>
              </>
            )}
          </>
        )}
      </nav>
      {user == null ? (
        <>
          <div className="dropdownContainer">
            <div
              className="dropdown"
              style={{
                float: "right",
              }}
            >
              <button className="dropbtn">Menu</button>
              <div className="dropdown-content">
                <Link to="/compare">Compare</Link>
                <Link to="/signin">Log In</Link>
                <Link to="/signup">Get Started</Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="dropdownContainer">
          <div className="dropdown" style={{ float: "right" }}>
            <button className="dropbtn">Menu</button>
            <div className="dropdown-content">
              <Link to="/" className="redundant">
                Home
              </Link>
              <Link to="/profile">Profile</Link>
              <Link to="/compare" className="redundant">
                Compare
              </Link>
              <Link onClick={() => Logout()} to="/">
                Logout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navigation;
