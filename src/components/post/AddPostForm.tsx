import { styled } from "styled-components";
import { PostFormType } from "../../type/postType";
import Editor from "./Editor";

const AddPostFormBlock = styled.form`
  display: flex;
  flex-direction: column;
`;

const SaveButton = styled.button`
  margin-top: 10px;
  width: 200px;
`;

const AddPostForm = ({
  title,
  onTitleChanged,
  onContentChanged,
  user,
  onAuthorChanged,
  usersOptions,
  onSavePostClicked,
  canSave,
}: PostFormType) => {
  return (
    <section>
      <h2>Add a New Post</h2>
      <AddPostFormBlock>
        <Editor
          title={title}
          onTitleChanged={onTitleChanged}
          onContentChanged={onContentChanged}
          user={user}
          onAuthorChanged={onAuthorChanged}
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
