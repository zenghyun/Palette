import { styled } from "styled-components";

const SpinnerBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    margin: 5px;
  }

  /* https://projects.lukehaas.me/css-loaders/ , Loader #3 */
  .loader {
    font-size: 10px;
    margin: 10px;
    /* text-indent: -9999em; */
    width: 5em;
    height: 5em;
    border-radius: 50%;
    background: var(--redux-color);
    background: -moz-linear-gradient(
      left,
      var(--redux-color) 10%,
      rgba(128, 0, 255, 0) 42%
    );
    background: -webkit-linear-gradient(
      left,
      var(--redux-color) 10%,
      rgba(128, 0, 255, 0) 42%
    );
    background: -o-linear-gradient(
      left,
      var(--redux-color) 10%,
      rgba(128, 0, 255, 0) 42%
    );
    background: -ms-linear-gradient(
      left,
      var(--redux-color) 10%,
      rgba(128, 0, 255, 0) 42%
    );
    background: linear-gradient(
      to right,
      var(--redux-color) 10%,
      rgba(128, 0, 255, 0) 42%
    );
    position: relative;
    -webkit-animation: load3 1.4s infinite linear;
    animation: load3 1.4s infinite linear;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }

  .loader:before {
    width: 50%;
    height: 50%;
    background: var(--redux-color);
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
  }

  .loader:after {
    background: #ffffff;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: "";
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  @-webkit-keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const Spinner = () => {
  return (
    <SpinnerBlock className="spinner">
      <div className="loader" />
    </SpinnerBlock>
  );
};

export default Spinner;
