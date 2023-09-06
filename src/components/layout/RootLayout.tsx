import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import NavContainer from "../../container/common/NavContainer";

const RootBlock = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 6fr;
  transition: all 0.3s ease;
  section {
    margin-left: auto;
    margin-right: auto;
    padding: 0 1.5rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
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
