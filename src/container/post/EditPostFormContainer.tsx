import { ChangeEvent, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectPostById, postUpdated } from "../../features/postsSlice";
import { PostStateType, PostIdParamType } from "../../type/postType";
import { RootStateType } from "../../app/store";
import { useAppDispatch } from "../../app/store";
import PostForm from "../../components/post/PostForm";

const EditPostFormContainer = () => {
  const params = useParams<PostIdParamType>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const post = useSelector((state: RootStateType) =>
    selectPostById(state, params.postId)
  ) as PostStateType;

  const [title, setTitle] = useState<string>(post.title);
  const [content, setContent] = useState<string>(post.content);

  const onTitleChanged = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue.length >= 20) {
      alert("글의 제목은 20글자를 넘길 수 없습니다.");
    } else {
      setTitle(inputValue);
    }
  }, []);

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
    <PostForm
      type={"EditPost"}
      title={title}
      content={content}
      onTitleChanged={onTitleChanged}
      onContentChanged={onContentChanged}
      onSavePostClicked={onSavePostClicked}
    />
  );
};

export default EditPostFormContainer;
