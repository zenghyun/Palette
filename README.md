# Palette
<br>

 <p align="center"><img src="https://github.com/zenghyun/Palette/assets/114131063/b2e93054-ddf7-4a91-9a6a-91b35fc37eae" width="300px" height="300px"></p> 
<br>
<br>

## 💻 프로젝트 소개

**Palette**는 MSW(Mock Service Worker)를 통해 서비스 워커를 사용하여 mock API를 기반으로 한 백엔드 개발과 리액트와 타입스크립트를 사용하여 만든 SNS 웹 애플리케이션으로, Redux를 기반으로 하여 프론트엔드 UI 상에서 데이터 교류에 초점을 맞춰서 진행된 프로젝트 입니다.  
<br>
<br>

## 📇 배포 주소 
- <a href="https://pa1ette.netlify.app/" target="_blank" rel="noopener noreferrer">Palette</a>
  
<br>

**News API의 development 버전의 배포 이슈로 인해 News 카테고리는 영상으로 대체하였습니다.**
<br>

![화면 기록 2023-08-08 오전 1 08 09](https://github.com/zenghyun/Palette/assets/114131063/ad28d171-68bc-4295-bddf-f0b0a3c100ee)
<br>
<br>

## 😀 개발 인원

<br>

|                                                                 <p style="font-size:20px">이정현</p>                                                                  |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <p align="center"><img src="https://user-images.githubusercontent.com/114131063/224213911-72bc1119-ba49-4d3f-8249-d7031c8fd0d9.jpg" width="250px" height="300px"></p> |
|                                               <p style="font-size:18px"> [@zenghyun](https://github.com/zenghyun)  </p>                                               |

<br>
<br>

## 🕰 개발 기간

### - 23.07.01 ~ 23.08.07
 
  <br>
  <br>

## 🏷️ 시작 가이드 

### Requirements
For building and running the application you need: 
- Node.js v16.14.0

<br>

### Installation

```js
$ git clone https://github.com/zenghyun/Palette.git
$ cd palette
```
<br>

### Frontend
```js
$ cd palette
$ yarn install
$ yarn run dev
```

<br>

### NewsApi 
#### 📌 NewsListContainer.tsx
[News API Key 발급 받기](https://newsapi.org/)
```js
// NewsListContainer.tsx 

const API_KEY = "";

...

const [loading, response, error] = usePromise({
    promiseCreator: () => {
      const query =
        params.category === "all" ? "" : `&category=${params.category}`;
      return axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr${query}&apikey=${API_KEY}`
      );
    },
    deps: [params.category],
  });

```

<br>

### Firebase 
Quill Editor에 이미지 첨부 이벤트가 발생하게 되면 서버(firebase)에 API 요청을 보내 응답 값으로 URL을 돌려받고, 이미지 태그의 src에 base64 대신 URL을 넣어줘야하기 때문에, Firebase Storage가 필요합니다.

```js
// npm ver
$ npm install firebase firebase-tools react-firebase-hooks

// yarn ver
$ yarn add firebase firebase-tools react-firebase-hooks
```

<br>

```js
firebase.ts 

import { initializeApp, getApp, getApps } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL:
    "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const storage = getStorage();
export default app;
```
<br>

## ⚙ 개발 환경

### Environment 
<img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"><img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"><img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
<br>

### Build Tools
<img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
<br>

### Config
<img src="https://img.shields.io/badge/yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white">
   <br>

### Cloud Service
<img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white">
<br>

   ### Frontend
   <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white">
   <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=JavaScript&logoColor=white">
   <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"><img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=react&logoColor=white">
<br>


## 📷 페이지 사진
<br>

| 메인 페이지                                                                                                                                               | 메인페이지 - 글 자세히 보기                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <p align="center"><img src="https://github.com/zenghyun/Palette/assets/114131063/806d9e40-1825-46ed-a619-09b1783a59d8" width="1000px" height="300px"></p> | <p align="center"><img src="https://github.com/zenghyun/Palette/assets/114131063/5b77b6e7-6f22-4b8f-b99e-e026141bc019" width="1000px" height="300px"></p> |

<br>

| 글 작성 페이지                                                                                                                                            | 글 편집 페이지                                                                                                                                            |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <p align="center"><img src="https://github.com/zenghyun/Palette/assets/114131063/0246983c-157b-4ba3-a1bf-b30340fa00e5" width="1000px" height="300px"></p> | <p align="center"><img src="https://github.com/zenghyun/Palette/assets/114131063/4480497d-53c7-4286-be45-798f6f34ae3b" width="1000px" height="300px"></p> |

<br>

| 유저 검색 페이지                                                                                                                                          | 개인 유저 글 목록 페이지                                                                                                                                  |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <p align="center"><img src="https://github.com/zenghyun/Palette/assets/114131063/b621905f-7c9d-470d-8c23-feb296c34742" width="1000px" height="300px"></p> | <p align="center"><img src="https://github.com/zenghyun/Palette/assets/114131063/3c5acee1-7f83-4efd-b3b3-e5801c936905" width="1000px" height="300px"></p> |

<br>


| 뉴스 페이지                                                                                                                                               | 알림 페이지                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <p align="center"><img src="https://github.com/zenghyun/Palette/assets/114131063/d0038de2-1e98-483c-acbf-c73b558a78ce" width="1000px" height="300px"></p> | <p align="center"><img src="https://github.com/zenghyun/Palette/assets/114131063/c22b187a-a2be-48de-9934-d62b53541055" width="1000px" height="300px"></p> |

<br>

## 🌳 Project Directory
<details>
<summary>Root 보기</summary>

### Project의 구성은 아래와 같습니다.

/public : MSW 통신을 위한 자동 생성된 파일입니다.  

/src/api : MSW 통신을 위한 코드 입니다. mock API을 기반으로 하여 가짜 데이터를 생성하기 위한 목적을 가진 폴더 및 파일입니다.

/src/app : 애플리케이션 내의 상태 관리 및 상태 업데이트 등을 관리하기 위한 파일입니다. 또한 React Persist 사용을 위한 sessionStorage 내에 데이터를 저장하는 역할을 수행합니다.  

components와 container를 나누는 기준은 UI 로직과 상태 관리 및 비즈니스 로직을 기준으로 나눈 것 입니다. 

components의 경우 주로 UI를 그리는 데 필요한 JSX와 스타일을 포함하며, 상태를 직접 변경하지 않고, 부모로부터 전달받은 props를 이용하여 UI를 표시합니다. 또한, components는 상태나 데이터를 관리하지 않습니다. 

container의 경우 주로 상태 관리(State Management)와 비즈니스 로직을 처리합니다. 이 프로젝트의 경우 Redux를 이용하여 상태를 관리하거나 API 호출 등을 담당하고 있습니다. 

components와 container 모두 내부에서는 크게 공통으로 사용될 부분을 제외하면 각 페이지 별로 세분화하여 파일을 구분하였습니다. 

/src/features : Redux Toolkit을 사용하여 Redux 상태 관리를 구현하는 파일을 모아놓은 폴더입니다.

/src/type : Typescript 기반의 프로젝트에서 변수 및 props 등을 관리하기 위해 페이지 별로 type을 구분해 놓은 파일을 모아놓은 폴더입니다.


```
palette
|
|-  /public
|           - mockServiceWorker.js (MSW)
|
|-  /src
|   |
|   |- /api
|   |       - client.ts
|   |       - server.js (MSW)
|   |  
|   |- /app
|   |       - store.ts
|   |
|   |- /components
|   |   |
|   |   |- /common
|   |   |       - Navbar.tsx
|   |   |       - PostAuthor.tsx
|   |   |       - ReactionButtons.tsx
|   |   |       - Spinner.tsx
|   |   |       - TimeAgo.tsx
|   |   |
|   |   |- /home 
|   |   |       - Home.tsx
|   |   |       - PostExcerpt.tsx
|   |   |
|   |   |- /layout
|   |   |       - EditPostLayout.tsx
|   |   |       - NewsRootLayout.tsx
|   |   |       - NotificationsRootLayout.tsx
|   |   |       - PostRootLayout.tsx
|   |   |       - RootLayout.tsx
|   |   |       - UserRootLayout.tsx
|   |   |
|   |   |- /news 
|   |   |       - NewsCategories.tsx
|   |   |       - NewsItem.tsx
|   |   |       - NewsList.tsx
|   |   |       - NewsPage.tsx
|   |   |
|   |   |- /notifications
|   |   |       - NotificationsList.tsx
|   |   |
|   |   |- /post 
|   |   |       - PostForm.tsx
|   |   |       - Editor.tsx
|   |   |       - SinglePostPage.tsx
|   |   |
|   |   |- /users
|   |           - SearchUser.tsx
|   |           - UserList.tsx
|   |           - UserPage.tsx
|   |
|   |
|   |- /container
|   |   |
|   |   |- /common
|   |   |       - FixedWindow.tsx
|   |   |       - NavContainer.tsx
|   |   |       - PostAuthorContainer.tsx
|   |   |       - ReactionButtonContainer.tsx
|   |   |       - ResponsiveWindow.ts
|   |   |
|   |   |- /home 
|   |   |       - HomeContainer.tsx      
|   |   |
|   |   |- /news
|   |   |       - NewsListContainer.tsx
|   |   |       - usePromise.ts
|   |   |
|   |   |- /post 
|   |   |       - AddPostFormContainer.tsx
|   |   |       - EditPostFormContainer.tsx
|   |   |       - setSanitize.ts
|   |   |       - SinglePostPageContainer.tsx
|   |   |
|   |   |- /users
|   |           - SearchUserContainer.tsx
|   |           - UserPageContainer.tsx
|   |           - UserListContainer.tsx
|   |
|   |- /features
|   |           - notificationsSlice.ts
|   |           - postsSlice.ts
|   |           - usersSlice.ts
|   |
|   |- /type
|   |           - apiType.ts
|   |           - commonType.ts
|   |           - newsType.ts
|   |           - notificationsType.ts
|   |           - postType.ts
|   |           - userTyle.ts
|   |
|   |- App.tsx
|   |- index.css
|   |- main.tsx
|   |- vite-env.d.ts
|
|- .eslintrc.cjs
|- .gitignore
|- .README.md
|- firebase.json
|- index.html
|- package-lock.json
|- package.json
|- storage.rules
|- tsconfig.json
|- tsconfig.node.json
|- vite.config.ts
|- yarn.lock
```
</details>


<br>

## ⭐️ 주요 기능

### 📌 게시글 목록 렌더링 
- dangerouslySetInnerHTML를 통한 XSS(Cross-Site Scripting) 공격을 방지하고 React 애플리케이션의 보안성을 높이기 위해 **sanitize-html** 사용 

- React.window를 사용하여 **25%** 의 렌더링 속도 개선 (Redux Profiler 기준)<br>
[계속되는 list 최적화하기](https://despiteallthat.tistory.com/289) 

<br>

### 📌 게시글 작성 및 수정 
- **React Quill Editor** 기반의 게시글 작성 및 수정 

- **React Persist**를 통하여 페이지 새로고침시 nanoid로 부여된 게시글 id가 바뀌어 페이지가 안나오는 현상 해결

- Firebase를 이용한 React Quill Editor 이미지 처리 (base64 => URL) <br>
[ Firebase를 이용한 React Quill Editor 이미지 처리하기 ( + firebase CORS 에러 )](https://despiteallthat.tistory.com/291)


<br>

### 📌 유저 검색 및 해당 유저 게시글 확인 
- 유저 검색시 0.5s의 delay를 통한 리소스 절약 및 성능 향상
  
- React.window를 이용한 렌더링 최적화 

- 유저 클릭시 유저별 게시글 렌더링 
  
<br>

### 📌 News API를 이용한 news 렌더링 
- 카테고리 별 뉴스 렌더링 

- React.window를 이용한 렌더링 최적화 
  
<br>

### 📌 리액션 버튼 클릭 및 게시글 작성시 알림 기능  
- MSW가 아닌 DB 연결 시 동작할 수 있는 기능 모의 구현  

<br>

### 📌 페이지 별 반응형 디자인 
- delay를 이용하여 windowWidth 변경시 widthBreakpoints를 통하여 이벤트를 debounce하여 렌더링 <br>
[responsiveWindow](https://github.com/zenghyun/Palette/blob/main/src/container/common/responsiveWindow.ts)

<br>

## 🛠️ Refactoring 

### AddPostForm, EditPostForm component 공통 component화  

AddPostForm과 EditPostForm의 경우 중복되는 코드가 대부분이기 때문에, 하나의 component로 바꾸면 좋겠다고 생각하게 되었습니다.

 EditPostForm의 경우 기존의 작성한 내용을 Redux store를 이용하여 가져오는 부분만 유의하면 되기 때문에 기존에 props의 타입으로 지정된 **PostFormType**을 사용 목적에 맞게 수정하였습니다. 

#### 📌 AddPostForm.tsx
```js
import { styled } from "styled-components";
import { PostFormType } from "../../type/postType";
import Editor from "./Editor";

const AddPostFormBlock = styled.form`
  display: flex;
  flex-direction: column;
`;

export const SaveButton = styled.button`
  font-family: "Gowun Batang", serif;
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

```

<br>

#### 📌 EditPostForm.tsx
```js
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
        className="button"
        onClick={onSavePostClicked}
      >
        Posting
      </SaveButton>
    </section>
  );
};

export default EditPostForm;
```

### 두 component를 하나의 component로 변경 

#### 📌 PostForm.tsx 
```js
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
          disabled={text.buttonText === "Save Post" ? !canSave : false} // AddPost 일때만 활성화 
        >
          {text.buttonText}
        </SaveButton>
      </PostFormBlock>
    </section>
  );
};

export default PostForm;

```

#### 📌 postType.ts 
```js
export type PostFormType = {
  type?: string; // type 부분 추가
  title: string;
  onTitleChanged: (e: ChangeEvent<HTMLInputElement>) => void;
  postContent?: string;
  content?: string;
  onContentChanged: (content: string) => void;
  user?: string;
  onAuthorChanged?: (e: ChangeEvent<HTMLSelectElement>) => void;
  usersOptions?: JSX.Element[];
  onSavePostClicked?: () => void;
  canSave?: boolean;
};
```
#### 📌 AddPostFormContainer & EditPostFormContainer 
```js
// AddPostFormContainer.tsx 
    <PostForm
      type={"AddPost"} // type 추가
      // ...
    />

// EditPostFormContainer.tsx     
    <PostForm
      type={"EditPost"} // type 추가 
      // ...
    />
```
