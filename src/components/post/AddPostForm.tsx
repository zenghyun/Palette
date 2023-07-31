import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { UserStateType } from "../../type/userType";
// import { addNewPost, InitialPostType } from "../../features/posts/postsSlice";
import { postAdded } from "../../features/posts/postsSlice";
import { useAppDispatch } from "../../app/store";
import { selectAllUsers } from "../../features/users/usersSlice";
import { useNavigate } from "react-router-dom";
import { fetchNotifications } from "../../features/notifications/notificationsSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  // const [addRequestStatus, setAddRequestStatus] = useState('idle');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const onContentChanged = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);
  const onAuthorChanged = (e: ChangeEvent<HTMLSelectElement>) =>
    setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      dispatch(fetchNotifications());
    }
    setTitle("");
    setContent("");
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
      <form>
        <label htmlFor="postTitle">제목</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">작성자</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="postContent">내용</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button
          type="button"
          className="button saveButton"
          onClick={onSavePostClicked}
          disabled={!canSave}
        >
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
