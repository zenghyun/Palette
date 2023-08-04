import { useRef, useEffect, useState, useMemo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Snow 테마에 대한 CSS 파일을 임포트
import { styled } from "styled-components";
import { ChangeEvent } from "react";
import { storage } from "../../container/common/firebase";
import { uploadBytes, getDownloadURL, ref } from "firebase/storage";

type EditorProps = {
  title: string;
  onTitleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  postContent?: string;
  onContentChange: (content: string) => void;
  user?: string;
  onAuthorChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  usersOptions?: JSX.Element[];
};

const TitleInput = styled.input`
  font-size: 3rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid black;
  margin-bottom: 2rem;
  width: 100%;
`;

const Userbox = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  select {
    font-size: 1.125rem;
    margin-bottom: 2rem;
  }
`;

const QuillWrapper = styled.div`
  /* 최소 크기 지정 및 padding 제거 */
  .ql-container {
    overflow: hidden auto;
  }
  .ql-editor {
    padding: 0;
    height: 350px;
    font-size: 1.125rem;
    line-height: 1.5;
    overflow-x: hidden;
  }
  .ql-editor .ql-blank::before {
    left: 0px;
  }
`;

const Editor = ({
  title,
  onTitleChange,
  onContentChange,
  postContent,
  user,
  onAuthorChange,
  usersOptions,
}: EditorProps) => {
  const [content, setContent] = useState<string>("");
  const quillRef = useRef<ReactQuill>(null); // ReactQuill 컴포넌트에 대한 Ref

  useEffect(() => {
    if (quillRef.current) {
      const quill = quillRef.current.getEditor(); // Quill 인스턴스를 얻음

      quill.on("text-change", (_delta, _oldDelta, source) => {
        if (source === "user") {
          onContentChange(quill.root.innerHTML);
          setContent(quill.root.innerHTML);
        }
      });
    }
  }, [onContentChange]);

  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.addEventListener("change", async () => {
      const editor = quillRef?.current?.getEditor();
      const file = input?.files?.[0];

      if (!editor || !file) {
        // editor가 없거나 파일이 선택되지 않은 경우 처리
        return;
      }

      const range = editor.getSelection(true);
      if (!range || typeof range.index !== "number") {
        // range가 유효하지 않은 경우 처리
        return;
      }

      try {
        // 파일명을 "image/Date.now()"로 저장
        const storageRef = ref(storage, `image/${Date.now()}`);
        // Firebase Method : uploadBytes, getDownloadURL
        const snapshot = await uploadBytes(storageRef, file);
        // 이미지 URL 에디터에 삽입
        const url = await getDownloadURL(snapshot.ref);
        editor.insertEmbed(range.index, "image", url, "user");
        // URL 삽입 후 커서를 이미지 뒤로 이동
        const length = editor.getLength() - 1;
        editor.setSelection(range.index + 1, length, "user");
      } catch (error) {
        console.log(error);
      }
    });
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [3, 4, 5, 6, false] }],
          [{ font: [] }],
          ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ color: [] }, { background: [] }],
          ["link", "image", "video"],
          ["clean"],
        ],
        handlers: {
          image: () => imageHandler(),
        },
        formats: [
          "header",
          "font",
          "bold",
          "italic",
          "underline",
          "strike",
          "blockquote",
          "code-block",
          "list",
          "bullet",
          "color",
          "background",
          "link",
          "image",
          "video",
        ],
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <>
      <TitleInput
        placeholder="Please enter the Title"
        value={title}
        onChange={onTitleChange}
      />
      {postContent ? (
        ""
      ) : (
        <Userbox>
          <label htmlFor="postAuthor">Paletter</label>
          <select id="postAuthor" value={user} onChange={onAuthorChange}>
            <option value=""></option>
            {usersOptions}
          </select>
        </Userbox>
      )}
      <QuillWrapper>
        <ReactQuill
          ref={quillRef}
          value={postContent !== undefined ? postContent : content}
          onChange={(value) => {
            onContentChange(value);
          }}
          modules={modules}
        />
      </QuillWrapper>
    </>
  );
};

export default Editor;
