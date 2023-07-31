import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectPostById, postUpdated } from "../../features/posts/postsSlice";
import { PostStateType } from "../../type/postType";
import { RootStateType } from "../../app/store";
import { useAppDispatch } from "../../app/store";

const EditPostForm = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const post = useSelector((state: RootStateType) =>
    selectPostById(state, params.postId)
  ) as PostStateType;

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const onContentChanged = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postUpdated({ id: params.postId, title, content }));
      navigate(`/posts/${params.postId}`);
    }
  };

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChange}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent "
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
      </form>
      <button
        type="button"
        className="button saveButton"
        onClick={onSavePostClicked}
      >
        Posting
      </button>
    </section>
  );
};

export default EditPostForm;
