import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { Logout } from "../features/user/userSlice";
import "./navbar.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Navbarr = () => {
  const user = useSelector((state) => state.Users.users);
  const isAdmin = localStorage.getItem("isadmin");

  const dispatch = useDispatch();
  return (
    <div>
      <Navbar bg="black" expand="xl" fixed="top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto meAuto nav-nav">
            <Nav.Link className="wa">
              <Link to="/profil/roster">Roster</Link>
            </Nav.Link>
            <Nav.Link className="wa">
              <Link to="/profil/lobbies">Lobbies</Link>
            </Nav.Link>
            <Nav.Link className="wa">
              <Link to="/profil/fixtures">Fixtures</Link>
            </Nav.Link>
            <Nav.Link className="wa">
              <Link to="/profil/players">Players</Link>
            </Nav.Link>
          </Nav>

          <NavDropdown
            className="dropp"
            title={user.name}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item>
              <Link to="/profil/edit">Profile </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              {isAdmin == "true" ? (
                <Link to="/dashboard"> dashboard</Link>
              ) : null}
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => {
                dispatch(Logout());
                window.location.reload();
              }}
            >
              <Link to="/">Log out </Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navbarr;
