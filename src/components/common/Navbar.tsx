import { Link } from "react-router-dom";
import { styled } from "styled-components";

const NavbarBlock = styled.nav`
  width: 350px;
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

  display: flex;
  padding: 0;
  background: var(--redux-color);

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

  & a:first-of-type {
    margin-left: -1.5rem;
  }

  & a:hover {
    color: white;
    background: #926bcf;
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
    height: 100px;
  }

  .navLinks a .badge {
    margin-left: 5px;
    position: relative;
    color: white;
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
            <Link to="/">Feed</Link>
            <Link to="/posts">Add Post</Link>
            <Link to="/users">Paletter</Link>
            <Link to="/news/all">News</Link>
            <Link to="/notifications">Notifications {badge}</Link>
          </div> 
        </div>
      </section>
    </NavbarBlock>
  );
};

export default Navbar;
