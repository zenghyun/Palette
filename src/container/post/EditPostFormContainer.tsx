import { ChangeEvent, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectPostById, postUpdated } from "../../features/postsSlice";
import { PostStateType } from "../../type/postType";
import { RootStateType } from "../../app/store";
import { useAppDispatch } from "../../app/store";
import EditPostForm from "../../components/post/EditPostForm";
const EditPostFormContainer = () => {
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
    <EditPostForm title={title}
        content={content}
        onTitleChanged={onTitleChanged}
        onContentChanged={onContentChanged}
        onSavePostClicked={onSavePostClicked}
    />
  )
}

export default EditPostFormContainer