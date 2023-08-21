import { Link } from "react-router-dom";
import { styled } from "styled-components";

const NavbarBlock = styled.nav`
  width: 350px;
  height: 200vh;
  display: flex;
  padding: 0;
  background: var(--redux-color);
  transition: all 0.3s ease;
  .banner {
    cursor: pointer;
    margin: 30px;
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

  @media (max-width: 1200px) {
    width: 270px;
    .banner {
      font-size: 36px;
    }
    .navLinks a {
      font-size: 18px;
    }
  }

  @media (max-width: 930px) {
    width: 220px;
    .banner {
      margin: 30px 0;
    }
    .navLinks a {
      font-size: 14px;
      margin: 0;
    }
  }

  @media (max-width: 768px) {
    height: 16vh;
    width: 100%;
    .banner {
      font-size: 2rem;
      margin: 0;
      padding: 16px 0 0 0;
    }
    .navLinks {
      padding-top: 5px;
      width: 100%;
      flex-direction: row;
      justify-content: space-around; 
      align-items: center;

      & a {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 660px) {
    section {
      padding: 0 1rem;
    }
    .navLInk {
      text-align: center;
    }

    & a {
      width: 60px;
      text-align: center;
      font-size: 100px;
    }

    & a,
    & a:active {
      padding: 0;
    }
    & a:hover {
      scale: 1.2;
    }
    .navLinks a {
      font-size: 20px;
    }
    .navLinks a .logoName {
      display: none;
    }
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
            <Link to="/">
              📌 <span className="logoName">Feed</span>
            </Link>
            <Link to="/posts">
              📚 <span className="logoName">Add Post</span>
            </Link>
            <Link to="/users">
              🎨 <span className="logoName">Paletter</span>
            </Link>
            <Link to="/news/all">
              📰 <span className="logoName">News</span>
            </Link>
            <Link to="/notifications">
              💜 <span className="logoName">Notifications</span> {badge}
            </Link>
          </div>
        </div>
      </section>
    </NavbarBlock>
  );
};

export default Navbar;
