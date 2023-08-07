# Palette
<br>

 <p align="center"><img src="https://github.com/zenghyun/Palette/assets/114131063/b2e93054-ddf7-4a91-9a6a-91b35fc37eae" width="300px" height="300px"></p> 
<br>
<br>


## 💻 프로젝트 소개

**Palette**는 MSW(Mock Service Worker)를 통해 서비스 워커를 사용하여 mock API를 기반으로 한 백엔드 개발과 리액트와 타입스크립트를 사용하여 만든 SNS 웹 애플리케이션으로, Redux를 기반으로 하여 프론트엔드 UI 상에서 데이터 교류에 초점을 맞춰서 진행된 프로젝트 입니다.  
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
React quill에 image를 등록할 때 src를 base64기반으로 받아오는 것을 원본 파일 양식으로 받아오기 위해 Firebase Storage가 필요합니다.

```js
// npm ver
$ npm install firebase firebase-tools react-firebase-hooks

// yarn ver
$ yarn add firebase firebase-tools react-firebase-hooks
```

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

## ⭐️ 주요 기능


### 📌 PostList 
- React quill을 이용한 게시글 작성 
- base64 기반의 이미지 경로를 firebase를 이용하여 원본 파일양식으로 변환 후 posting 

<br>

### 📌 게시글 작성 기능 
- React quill을 이용한 게시글 작성 
- base64 기반의 이미지 경로를 firebase를 이용하여 원본 파일양식으로 변환 후 posting 

<br>

### 📌 게시글 수정 및 삭제 기능 
- 내가 작성한 게시글만 수정 및 삭제 가능 

<br>

### 📌 아이디를 통하여 해당 유저가 작성한 게시글만 보는 기능 
- 게시글 리스트에서 아이디 클릭 시 해당 유저가 작성한 글만 보여줌 

<br>

### 📌 태그를 통하여 해당 태그가 적힌 게시글만 보는 기능 
- 게시글 리스트에서 태그 클릭 시 해당 태그가 포함된 게시글만 보여줌 
