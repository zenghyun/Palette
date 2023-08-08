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
$ yarn start 
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

### Config
<img src="https://img.shields.io/badge/yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white">

   <br>

   ### Frontend
   <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white">
   <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=JavaScript&logoColor=white">
   <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"><img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=react&logoColor=white">
       
<br>


## 📷 페이지 사진
<br>

| 메인 페이지                                                                                                                                             | 메인페이지 - 글 자세히 보기                                                                                                                                                |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <p align="center"><img src="https://github.com/zenghyun/Palette/assets/114131063/806d9e40-1825-46ed-a619-09b1783a59d8" width="1000px" height="300px"></p> | <p align="center"><img src="https://github.com/zenghyun/Palette/assets/114131063/5b77b6e7-6f22-4b8f-b99e-e026141bc019" width="1000px" height="300px"></p> |

<br>

| 글 작성 페이지                                                                                                                                            | 글 편집 페이지                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <p align="center"><img src="https://github.com/zenghyun/Palette/assets/114131063/0246983c-157b-4ba3-a1bf-b30340fa00e5" width="1000px" height="300px"></p> | <p align="center"><img src="https://github.com/zenghyun/Palette/assets/114131063/4480497d-53c7-4286-be45-798f6f34ae3b" width="1000px" height="300px"></p> |

<br>

| 유저 검색 페이지                                                                                                                                               | 개인 유저 글 목록 페이지                                                                                                                                              |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <p align="center"><img src="https://github.com/zenghyun/Palette/assets/114131063/b621905f-7c9d-470d-8c23-feb296c34742" width="1000px" height="300px"></p> | <p align="center"><img src="https://github.com/zenghyun/Palette/assets/114131063/3c5acee1-7f83-4efd-b3b3-e5801c936905" width="1000px" height="300px"></p> |

<br>


| 뉴스 페이지                                                                                                                                             | 알림 페이지                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <p align="center"><img src="https://github.com/zenghyun/Palette/assets/114131063/d0038de2-1e98-483c-acbf-c73b558a78ce" width="1000px" height="300px"></p> | <p align="center"><img src="https://github.com/zenghyun/Palette/assets/114131063/c22b187a-a2be-48de-9934-d62b53541055" width="1000px" height="300px"></p> |

<br>

## 🌳 Project Directory
<details>
<summary>Root 보기</summary>

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
|   |   |       - RootLayout.tsx
|   |   |       - Spinner.tsx
|   |   |       - TimeAgo.tsx
|   |   |
|   |   |- /home 
|   |   |       - Home.tsx
|   |   |       - PostExcerpt.tsx
|   |   |       
|   |   |- /news 
|   |   |       - NewsCategories.tsx
|   |   |       - NewsItem.tsx
|   |   |       - NewsList.tsx
|   |   |       - NewsPage.tsx
|   |   |       - NewsRootLayout.tsx
|   |   |
|   |   |- /notifications
|   |   |       - NotificationsList.tsx
|   |   |       - NotificationsRootLayout.tsx
|   |   |
|   |   |- /post 
|   |   |       - AddPostForm.tsx
|   |   |       - Editor.tsx
|   |   |       - EditPostForm.tsx
|   |   |       - EditPostLayout.tsx
|   |   |       - PostRootLayout.tsx
|   |   |       - SinglePostPage.tsx
|   |   |
|   |   |- /users
|   |           - SearchUser.tsx
|   |           - UserList.tsx
|   |           - UserPage.tsx
|   |           - UserRootLayout.tsx
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