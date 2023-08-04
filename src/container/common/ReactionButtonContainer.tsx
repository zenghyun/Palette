import { reactionAdded } from "../../features/postsSlice";
import { PostStateType } from "../../type/postType";
import { useAppDispatch } from "../../app/store";
import { fetchNotifications } from "../../features/notificationsSlice";

import ReactionButtons from "../../components/common/ReactionButtons";

const reactionEmoji = {
  thumbsUp: "👍",
  hooray: "🎉",
  heart: "❤️",
  rocket: "🚀",
  eyes: "👀",
};

const ReactionButtonContainer = ({ post }: { post: PostStateType }) => {
  const dispatch = useAppDispatch();

  const renderReactionButtons = (name: string) => {
    dispatch(reactionAdded({ postId: post.id, reaction: name }));
    dispatch(fetchNotifications());
  };

  return (
    <ReactionButtons
      post={post}
      renderReactionButtons={renderReactionButtons}
      reactionEmoji={reactionEmoji}
    />
  );
};

export default ReactionButtonContainer;
