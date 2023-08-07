import { styled } from "styled-components";
import { UserPageType } from "../../type/userType";

const UserPageBlock = styled.section`
 transition: all 0.3s ease;
  .postList {
    list-style: none;
    font-size: 1.5rem;
  }
  .postList a {
    text-decoration: none;
    color: black;
  }

  .postList a:hover {
    color: #926bcf;
  }

  /* 화면 너비 0 ~ 576px */
  @media (max-width: 576px) {
    .postList {
      font-size: 1.2rem;
      & ul {
        font-size: 1rem;
      }
    }
  }

`;

const UserPage = ({ user, postTitles }: UserPageType) => {
  return (
    <UserPageBlock>
      <h2>{user.name} 님의 palette </h2>
      <h3>🎨 post: {postTitles.length}</h3>
      <ul>{postTitles}</ul>
    </UserPageBlock>
  );
};

export default UserPage;
