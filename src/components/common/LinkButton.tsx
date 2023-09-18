import { styled } from "styled-components";
import { Link } from "react-router-dom";

const ButtonBlock = styled.div`
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

const LinkButton = ({ link, title }: { link: string; title: string; }) => {
  return (
    <ButtonBlock>
      <Link to={link} className="button">
        {title}
      </Link>
    </ButtonBlock>
  );
};

export default LinkButton;
