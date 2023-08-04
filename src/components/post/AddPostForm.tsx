import { ChangeEvent, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { UserStateType } from "../../type/userType";
// import { addNewPost, InitialPostType } from "../../features/posts/postsSlice";
import { postAdded } from "../../features/posts/postsSlice";
import { useAppDispatch } from "../../app/store";
import { selectAllUsers } from "../../features/users/usersSlice";
import { useNavigate } from "react-router-dom";
import { fetchNotifications } from "../../features/notifications/notificationsSlice";
import Editor from "../common/Editor";
import { styled } from "styled-components";

const AddPostFormBlock = styled.form`
  display: flex;
  flex-direction: column;
`;

const SaveButton = styled.button`
  margin-top: 10px;
  width: 200px;
`;

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  // const [addRequestStatus, setAddRequestStatus] = useState('idle');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const users = useSelector(selectAllUsers);

  const onTitleChanged = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value),
    []
  );
  const onContentChanged = useCallback(
    (content: string) => setContent(content),
    []
  );
  const onAuthorChanged = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => setUserId(e.target.value),
    []
  );

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      dispatch(fetchNotifications());
    }
    navigate("/");
  };

  const canSave = [title, content, userId].every(Boolean);

  // 실제 Backend API에 data 추가 가능할 시 logic

  // const canSave =
  //   [title, content, userId].every(Boolean) && addRequestStatus === 'idle'

  // const initialPost = { title, content, user: userId} as InitialPostType;

  // const onSavePostClicked = async () => {
  //   if (canSave) {
  //     try {
  //       setAddRequestStatus('pending')
  //       await dispatch(addNewPost(initialPost)).unwrap()
  //       setTitle('')
  //       setContent('')
  //       setUserId('')
  //     } catch (err) {
  //       console.error('Failed to save the post: ', err)
  //     } finally {
  //       setAddRequestStatus('idle')
  //     }
  //   }
  // }

  const usersOptions = users.map((user: UserStateType) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add a New Post</h2>
      <AddPostFormBlock>
        <Editor
          title={title}
          onTitleChange={onTitleChanged}
          onContentChange={onContentChanged}
          user={userId}
          onAuthorChange={onAuthorChanged}
          usersOptions={usersOptions}
        />
        <SaveButton
          className="button"
          type="button"
          onClick={onSavePostClicked}
          disabled={!canSave}
        >
          Save Post
        </SaveButton>
      </AddPostFormBlock>
    </section>
  );
};

export default AddPostForm;
