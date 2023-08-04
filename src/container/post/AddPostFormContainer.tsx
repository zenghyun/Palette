import { ChangeEvent, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { UserStateType } from "../../type/userType";
import { postAdded } from "../../features/postsSlice";
import { useAppDispatch } from "../../app/store";
import { selectAllUsers } from "../../features/usersSlice";
import { useNavigate } from "react-router-dom";
import { fetchNotifications } from "../../features/notificationsSlice";

import AddPostForm from "../../components/post/AddPostForm";

const AddPostFormContainer = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [userId, setUserId] = useState<string>("");

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
      navigate("/");
    } 
  };

  const canSave = [title, content, userId].every(Boolean);

  const usersOptions = users.map((user: UserStateType) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));
  return (
    <AddPostForm
      title={title}
      onTitleChanged={onTitleChanged}
      onContentChanged={onContentChanged}
      user={userId}
      onAuthorChanged={onAuthorChanged}
      usersOptions={usersOptions}
      onSavePostClicked={onSavePostClicked}
      canSave={canSave}
    />
  );
};

export default AddPostFormContainer;
