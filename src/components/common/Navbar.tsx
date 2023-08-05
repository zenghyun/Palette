import { Link } from "react-router-dom";
import { styled } from "styled-components";

const NavbarBlock = styled.nav`
  width: 350px;
  height: 100vh;
  display: flex;
  padding: 0;
  background: var(--redux-color);

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

  & section {
    width: 100%;
  }

  & section h1 {
    font-size: 3rem;
  }

  & section h1,
  & section {
    color: white;
  }

  & a,
  & a:active {
    font-weight: 700;
    text-decoration: none;
    padding: 0.25rem 1.5rem;
    border-radius: 4px;
    color: white !important;
    background: inherit;
  }

  & a:hover {
    background-color: #926bcf;
    scale: 1.1;
    transition: all 0.5s;
  }

  .navContent {
    display: flex;
    justify-content: space-between;
  }

  .navLinks {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .navLinks a {
    margin-left: 3px;
    font-size: 1.25rem;
    display: block;
    line-height: 40px;
  }

  .navLinks a .badge {
    margin-left: 5px;
    position: relative;
    color: white;
  }
`;

const Navbar = ({
  navigate,
  badge,
}: {
  navigate: (path: string) => void;
  badge: JSX.Element | undefined;
}) => {
  return (
    <NavbarBlock>
      <section>
        <h1 className="banner" onClick={() => navigate("/")}>
          Palette
        </h1>
        <div className="navContent">
          <div className="navLinks">
            <Link to="/">📌 Feed</Link>
            <Link to="/posts">📚 Add Post</Link>
            <Link to="/users">🎨 Paletter</Link>
            <Link to="/news/all">📰 News</Link>
            <Link to="/notifications">💜 Notifications {badge}</Link>
          </div>
        </div>
      </section>
    </NavbarBlock>
  );
};

export default Navbar;
