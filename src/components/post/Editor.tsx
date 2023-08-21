import { useRef, useEffect, useState, useMemo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Snow 테마에 대한 CSS 파일을 임포트
import { styled } from "styled-components";
import { PostFormType } from "../../type/postType";
import { storage } from "../../api/firebase";
import { uploadBytes, getDownloadURL, ref } from "firebase/storage";

const TitleInput = styled.input`
  font-family: "Gowun Batang", serif;
  font-size: 3rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid black;
  margin-bottom: 2rem;
  width: 100%;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 90%;
    font-size: 2rem;
  }
`;

const Userbox = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  #postAuthor {
    font-family: "Gowun Batang", serif;
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
  #postAuthor option {
  }

  @media (max-width: 768px) {
    #postAuthor {
      font-size: 1.5rem;
    }
  }
`;

const QuillWrapper = styled.div`
  .ql-container {
    overflow: hidden auto;
  }
  .ql-editor {
    font-family: "Gowun Batang", serif;
    padding: 0;
    height: 380px;
    font-size: 1.125rem;
    line-height: 1.5;
    overflow-x: hidden;
  }
  .ql-editor .ql-blank::before {
    left: 0px;
  }

  .ql-tooltip {
    margin-left: 150px;
  }

  @media (max-width: 768px) {
    .ql-editor {
      height: 300px;
    }
  }

  @media (max-width: 576px) {
    .ql-editor {
      height: 200px;
    }
  }
`;

const Editor = ({
  title,
  onTitleChanged,
  onContentChanged,
  postContent,
  user,
  onAuthorChanged,
  usersOptions,
}: PostFormType) => {
  const [content, setContent] = useState<string>("");
  const quillRef = useRef<ReactQuill>(null); // ReactQuill 컴포넌트에 대한 Ref

  useEffect(() => {
    if (quillRef.current) {
      const quill = quillRef.current.getEditor(); // Quill 인스턴스를 얻음

      quill.on("text-change", (_delta, _oldDelta, source) => {
        if (source === "user") {
          onContentChanged(quill.root.innerHTML);
          setContent(quill.root.innerHTML);
        }
      });
    }
  }, [onContentChanged]);

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
          [{ list: "ordered" }, { list: "bullet" }, { 'align': [] }],
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
          "align",
          "color",
          "background",
          "link",
          "image",
          "video",
        ],
      },
    }),
    []
  );

  return (
    <>
      <TitleInput
        placeholder="Please enter the Title"
        value={title}
        onChange={onTitleChanged}
      />
      {postContent ? (
        ""
      ) : (
        <Userbox>
          <label htmlFor="postAuthor">Paletter</label>
          <select id="postAuthor" value={user} onChange={onAuthorChanged}>
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
            onContentChanged(value);
          }}
          modules={modules}
          placeholder={"작성하고 싶은 글의 내용을 입력해주세요"}
        />
      </QuillWrapper>
    </>
  );
};

export default Editor;
