import { useLocation } from "react-router-dom";
import styled from "styled-components";
import LinkButton from "./common/LinkButton";

const NotFoundBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .location {
        color: red;
    }
`;

type PathNameType = {
    pathname? : string;
}

const NotFound = () => {
  const location = useLocation() as PathNameType;
    
  return (
    <NotFoundBlock>
      <h3>존재하지 않는 경로입니다.</h3>
      <p>요청 경로 : <span className="location">{location.pathname}</span></p>
      <LinkButton link="/" title="메인 화면으로 가기"></LinkButton>
    </NotFoundBlock>
  );
};

export default NotFound;
