import { useRef, useEffect, useState, useMemo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Snow 테마에 대한 CSS 파일을 임포트
import { styled } from "styled-components";
import { ChangeEvent } from "react";

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

const Userbox = styled.select`
  font-size: 1.125rem;
  margin-bottom: 2rem;
`;

const QuillWrapper = styled.div`
  /* 최소 크기 지정 및 padding 제거 */
  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
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

  const modules = useMemo(() => ({
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
  }),[]);

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
          <>
        <label htmlFor="postAuthor">Paletter</label>
        <Userbox id="postAuthor" value={user} onChange={onAuthorChange}>
          <option value=""></option>
          {usersOptions}
        </Userbox>
          </>
      )}
      <QuillWrapper>
        {/* 모듈과 포맷을 적절하게 설정하여 ReactQuill 컴포넌트를 사용하세요 */}
        <ReactQuill
          ref={quillRef}
          value={postContent ? postContent : content} // 필요에 따라 초기 내용을 여기에 전달할 수 있습니다
          onChange={(value) => {
            onContentChange(value); // ReactQuill의 onChange 이벤트를 사용하여 내용을 업데이트합니다.
          }}
          modules={modules}
        />
      </QuillWrapper>
    </>
  );
};

export default Editor;