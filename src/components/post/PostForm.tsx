import { styled } from "styled-components";
import { PostFormType } from "../../type/postType";
import Editor from "./Editor";

const PostFormBlock = styled.form`
  display: flex;
  flex-direction: column;
`;

export const SaveButton = styled.button`
  font-family: "Gowun Batang", serif;
  margin-top: 10px;
  width: 200px;
`;

const textMap = {
  AddPost: {
    title: "Add a New Post",
    buttonText: "Save Post",
  },
  EditPost: {
    title: "Edit Post",
    buttonText: "Posting",
  },
};

const PostForm = ({
  type,
  title,
  onTitleChanged,
  onContentChanged,
  user,
  content,
  onAuthorChanged,
  usersOptions,
  onSavePostClicked,
  canSave,
}: PostFormType) => {
  const text = textMap[type as keyof typeof textMap];
  return (
    <section>
      <h2>{text.title}</h2>
      <PostFormBlock>
        <Editor
          title={title}
          onTitleChanged={onTitleChanged}
          onContentChanged={onContentChanged}
          user={user}
          postContent={content}
          onAuthorChanged={onAuthorChanged}
          usersOptions={usersOptions}
        />
        <SaveButton
          className="button"
          type="button"
          onClick={onSavePostClicked}
          disabled={text.buttonText === "Save Post" ? !canSave : false}
        >
          {text.buttonText}
        </SaveButton>
      </PostFormBlock>
    </section>
  );
};

export default PostForm;
