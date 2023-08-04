import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import NavContainer from "../../container/common/NavContainer";

const RootBlock = styled.main`
  font-family: "Gowun Batang", serif;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 6fr;
  section {
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 1.5rem;
  }

  .button {
    display: inline-block;
    background-color: rgb(183, 137, 235);
    color: white;
    color: rgb(30, 30, 30);
    border-radius: 4px;
    font-weight: 700;
    padding: 0.75rem 1.5rem;
    text-decoration: none;
    border: none;
    cursor: pointer;
  }

  .button:disabled,
  .button:disabled:hover {
    opacity: 0.5;
  }

  .button:hover {
    background-color: rgba(183, 137, 235, 0.527);
  }
`;

const RootLayout = () => {
  return (
    <>
      <RootBlock>
        <NavContainer />
        <Outlet />
      </RootBlock>
    </>
  );
};

export default RootLayout;
