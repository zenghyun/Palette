import { PostFormType } from "../../type/postType";
import { SaveButton } from "./AddPostForm";
import Editor from "./Editor";


const EditPostForm = ({
  title,
  content,
  onTitleChanged,
  onContentChanged,
  onSavePostClicked,
}: PostFormType) => {
  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <Editor
          title={title}
          postContent={content}
          onTitleChanged={onTitleChanged}
          onContentChanged={onContentChanged}
        />
      </form>
      <SaveButton
        type="button"
        className="button saveButton"
        onClick={onSavePostClicked}
      >
        Posting
      </SaveButton>
    </section>
  );
};

export default EditPostForm;
