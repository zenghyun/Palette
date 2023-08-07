import { styled } from "styled-components";
import { PostStateType, ReactionEmojiType } from "../../type/postType";

const ReactionButton = styled.button`
  background-color: rgb(235, 233, 233);
  border: 1px solid #e0e3e9;
  padding: 5px 10px;
  margin: 5px 6px 10px;
  border-radius: 4px;
  white-space: nowrap;
  transition: all 0.3s ease;
  &:hover {
    background-color: rgb(211, 208, 208);
  }

  /* 화면 너비 0 ~ 768px */
  @media (max-width: 768px) {
    padding: 5px 0px;
  }

  /* 화면 너비 0 ~ 576px */
  @media (max-width: 576px) {
    padding: 5px 3px;
  }

  /* 화면 너비 0 ~ 390px */
  @media (max-width: 576px) {
    padding: 5px 0px;
  }
`;

const ReactionButtons = ({
  post,
  renderReactionButtons,
  reactionEmoji,
}: {
  post: PostStateType;
  renderReactionButtons: (name: string) => void;
  reactionEmoji: ReactionEmojiType;
}) => {
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <ReactionButton
        key={name}
        type="button"
        onClick={() => renderReactionButtons(name)}
      >
        {emoji} {post.reactions[name]}
      </ReactionButton>
    );
  });
  return <div>{reactionButtons}</div>;
};

export default ReactionButtons;
