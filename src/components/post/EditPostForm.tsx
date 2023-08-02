import { ChangeEvent, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectPostById, postUpdated } from "../../features/posts/postsSlice";
import { PostStateType } from "../../type/postType";
import { RootStateType } from "../../app/store";
import { useAppDispatch } from "../../app/store";
import Editor from "../common/Editor";

const EditPostForm = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const post = useSelector((state: RootStateType) =>
    selectPostById(state, params.postId)
  ) as PostStateType;

  const [title, setTitle] = useState<string>(post.title);
  const [content, setContent] = useState<string>(post.content);

  const onTitleChanged = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value),
    []
  );
  const onContentChanged = useCallback(
    (content: string) => setContent(content),
    []
  );

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
        <Editor
          title={title}
          postContent={content}
          onTitleChange={onTitleChanged}
          onContentChange={onContentChanged}
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
