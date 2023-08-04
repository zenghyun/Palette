import { PostFormType } from "../../type/postType";
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
