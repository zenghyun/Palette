import { Link } from "react-router-dom";
import { styled } from "styled-components";

const NavbarBlock = styled.nav`
  .banner {
    cursor: pointer;
    margin: 30px;
  }

  .notifiButton {
    font-size: 18px;
    background-color: inherit;
  }

  .notifiButton .notifiLogo {
    font-size: 24px;
  }

  nav {
    display: flex;
    padding: 0;
    background: var(--redux-color);
  }

  nav section {
    width: 100%;
  }

  nav section h1 {
    font-size: 3rem;
  }

  nav section h1,
  nav section {
    color: white;
  }

  nav a,
  nav a:active {
    font-weight: 700;
    text-decoration: none;
    padding: 0.25rem 1.5rem;
    border-radius: 4px;
    color: white !important;
    background: #481499;
  }

  nav a:first-of-type {
    margin-left: -1.5rem;
  }

  nav a:hover {
    color: white;
    background: #926bcf;
  }

  .navContent {
    display: flex;
    justify-content: space-between;
  }

  .navLinks {
    display: flex;
  }

  .navLinks a {
    margin-left: 5px;
  }

  .navLinks a .badge {
    margin-left: 5px;
    position: relative;
    top: -3px;
  }

  .badge {
    display: inline-block;
    padding: 0.25em 0.4em;
    margin-left: 1rem;
    font-size: 110%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
    color: #212529;
    background-color: inherit;
  }

  .navLinks :first-child {
    margin-left: 0;
  }
`;

const Navbar = ({
  navigate,
  badge,
  newNotification,
}: {
  navigate: (path: string) => void;
  badge: JSX.Element | undefined;
  newNotification: () => void;
}) => {
  return (
    <NavbarBlock>
      <nav>
        <section>
          <h1 className="banner" onClick={() => navigate("/")}>
            Palette
          </h1>
          <div className="navContent">
            <div className="navLinks">
              <Link to="/">Feed</Link>
              <Link to="/posts">Add Post</Link>
              <Link to="/users">Paletter</Link>
              <Link to="/news/all">News</Link>
              <Link to="/notifications">Notifications</Link>
            </div>
            <button className="notifiButton" onClick={newNotification}>
              <span className="notifiLogo">❤️</span>
              {badge}
            </button>
          </div>
        </section>
      </nav>
    </NavbarBlock>
  );
};

export default Navbar;
