import { reactionAdded } from "../../features/posts/postsSlice";
import { PostStateType } from "../../type/postType";
import { useAppDispatch } from "../../app/store";
import { fetchNotifications } from "../../features/notifications/notificationsSlice";
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
      <button
        key={name}
        type="button"
        className="muted-button reaction-button"
        onClick={() => {
          dispatch(reactionAdded({ postId: post.id, reaction: name }));
          dispatch(fetchNotifications());
        }}
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};
