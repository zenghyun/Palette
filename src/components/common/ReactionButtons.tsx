import { reactionAdded } from "../../features/posts/postsSlice";
import { PostStateType } from "../../type/postType";
import { useAppDispatch } from "../../app/store";
import { fetchNotifications } from "../../features/notifications/notificationsSlice";
import { styled } from "styled-components";

const ReactionButton = styled.button`
 background-color: rgb(235, 233, 233);
 border: 1px solid #e0e3e9;
 padding: 5px 10px;
 margin: 5px 6px 10px;
 border-radius: 4px;
 white-space: nowrap;

 &:hover {
  background-color: rgb(211, 208, 208);

 }
`;

const reactionEmoji = {
  thumbsUp: "👍",
  hooray: "🎉",
  heart: "❤️",
  rocket: "🚀",
  eyes: "👀",
};

export const ReactionButtons = ({ post }: { post: PostStateType }) => {
  const dispatch = useAppDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <ReactionButton
        key={name}
        type="button"
        className="reaction-button"
        onClick={() => {
          dispatch(reactionAdded({ postId: post.id, reaction: name }));
          dispatch(fetchNotifications());
        }}
      >
        {emoji} {post.reactions[name]}
      </ReactionButton>
    );
  });

  return <div>{reactionButtons}</div>;
};
