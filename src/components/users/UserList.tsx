import styled from "styled-components";
import SearchUserContainer from "../../container/users/SearchUserContainer";
import { UserListComponentType } from "../../type/userType";
import FixedWindow from "../../container/common/FixedWindow";
import { UserListResponsive } from "../../container/common/responsiveWindow";
const UserListBlock = styled.section`
  background-color: #d2e3fcb9;
  border: 3px solid black;
  padding: 0;
  margin-top: 20px;
  border-radius: 10px;
  width: 750px;
  height: 870px;
  transition: all 0.3s ease;

  h2 {
    padding: 20px;
    font-size: 2.15rem;
  }

  ul {
    width: 100%;
    padding: 0;
    overflow: hidden auto;
  }

  p {
    font-size: 1.1rem;
  }

  .userList {
    font-weight: bold;
    display: flex;
    font-size: 1.5rem;
    height: 200px;
    align-items: center;
    text-decoration: none;
    color: black;
    position: relative;
    overflow: hidden auto;
  }

  .userList::before {
    position: absolute;
    top: 0;
    left: -75%;
    z-index: 2;
    display: block;
    content: "";
    width: 50%;
    height: 100%;
    background: -webkit-linear-gradient(
      left,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.795) 100%
    );
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.795) 100%
    );
    -webkit-transform: skewX(-25deg);
    transform: skewX(-25deg);
  }

  .userList:hover::before {
    -webkit-animation: shine 0.75s;
    animation: shine 1s;
  }

  @-webkit-keyframes shine {
    100% {
      left: 125%;
    }
  }
  @keyframes shine {
    100% {
      left: 125%;
    }
  }

  .userList .profile {
    width: 150px;
    height: 150px;
    border-radius: 30%;
    margin-left: 20px;
    border: 3px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
  }

  .userList span {
    margin-left: 30px;
  }

  .userList .name {
    font-size: 2rem;
    margin: 0;
  }

  .userList:hover .name {
    color: #926bcf;
  }

  @media (max-width: 1200px) {
    width: 500px;
    .userList {
      font-size: 1rem;
      & .profile {
        width: 120px;
        height: 120px;
        margin: 0;
      }
      & .name {
        font-size: 1.5rem;
      }
    }
  }

  @media (max-width: 768px) {
    width: 510px;
    height: 750px;
    .userList {
      & .name {
        font-size: 1.2rem;
      }
      & .profile {
        width: 60px;
        height: 60px;
      }
      & .introduce {
        font-size: 0.875rem;
      }
      & .newPost {
        font-size: 0.875rem;
      }
    }
  }

  @media (max-width: 576px) {
    width: 310px;
    height: 510px;

    h2 {
      padding: 10px;
      font-size: 1.5rem;
    }

    .userList {
      & .name {
        font-size: 0.8rem;
      }
      & .profile {
        width: 30px;
        height: 30px;
        font-size: 0.5rem;
      }
      & .introduce {
        font-size: 0.6rem;
        display: inline;
      }
      & .newPost {
        font-size: 0.6rem;
        display: inline;
        color: #55a2c9;
      }
    }
  }

  @media (max-width: 390px) {
    height: 450px;
    & .profile {
      margin: 0;
      width: 45px;
      height: 45px;
    }
    & .introduce {
      font-size: 10px;
    }
    & .newPost {
      font-size: 10px;
    }
  }
`;

const UsersList = ({
  handleSearch,
  filteredUsers,
  renderedUsers,
  width,
}: UserListComponentType) => {
  const [windowHeight, windowItem] = UserListResponsive(width);
  
  return (
    <UserListBlock>
      <h2>Paletter</h2>
      <SearchUserContainer onSearch={handleSearch} />
      <FixedWindow
        height={windowHeight}
        width={width}
        itemCount={filteredUsers}
        itemSize={windowItem}
        renderedItem={renderedUsers}
      />
    </UserListBlock>
  );
};

export default UsersList;
