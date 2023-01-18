# 원티드 프리온보딩 프론트엔드 4팀 - 4주차 과제

> 원티드 프리온보딩 과제 4주차 (API 서버와 통신해서 작동하는 댓글 프로젝트를 Redux를 통해 구현)
>
> 기간 : 2023년 1월 16일 ~ 2023년 1월 19일

<br />

## 📖 목차

- [팀원명](#팀원명)
- [프로젝트 설명](#프로젝트-설명)
- [프로젝트 실행 방법](#프로젝트-실행-방법)
- [프로젝트 gif](#프로젝트-gif)
- [배포링크](#배포링크)
- [협업과정](#협업과정)
- [팀 코드 컨벤션](#팀-코드-컨벤션)
- [과제목표](#과제목표)
- [Best Practice 및 채택 근거](#best-practice-및-채택-근거)
- [폴더구조](#폴더구조)
- [사용기술](#사용기술)

<br />

## 💪팀원명

 | <img src="https://avatars.githubusercontent.com/u/92634711?v=4" width="120" height="120" /> | <img src="https://user-images.githubusercontent.com/105702862/205853151-2fa17dea-1d5d-47ba-9f54-94cd175a5e19.jpeg" width="120" height="120" /> | <img src="https://avatars.githubusercontent.com/u/44992033?v=4" width="120" height="120" /> | <img src="https://avatars.githubusercontent.com/u/91598778?v=4" width="120" height="120" /> |
 :-----------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: |
|                           [tnals545](https://github.com/tnals545)                           |                                                     [KKKHun2](https://github.com/KKKHun2)                                                      |                          [hyejineee](https://github.com/hyejineee)                          |                          [jeongmin7](https://github.com/jeongmin7)                          |
|                                         수민(팀원)                                          |                                                                   용훈(팀원)                                                                   |                                         혜진(팀원)                                          |                                         정민(팀원)                                          |


<br />

## 📝프로젝트 설명

API 서버와 통신해서 작동하는 댓글 프로젝트를 Redux를 통해 구현

<br />

## 🖥프로젝트 실행 방법

```shell

# 프로젝트 clone
$ git clone https://github.com/wanted-pre-onboarding-frontend-team4/pre-onboarding-8th-4-4.git

# npm 설치
$ npm install

# json 서버  실행
$ npm run api

# 프로젝트 실행
$ npm start

```
<br />

## 📝프로젝트 gif

<details>
  <summary>글 작성하기 </summary>
    <div markdown="1">
      <img src= "https://user-images.githubusercontent.com/91598778/213171760-d6a11da4-7911-45b7-800c-a4d3818f3d37.gif">
    </div>
</details>


<details>
  <summary>글 수정</summary>
    <div markdown="1">
      <img src= "https://user-images.githubusercontent.com/91598778/213171769-3c0c567e-883c-4df2-b666-c99432f47990.gif">
    </div>
</details>

<details>
  <summary>글 삭제</summary>
    <div markdown="1">
      <img src= "https://user-images.githubusercontent.com/91598778/213171768-e4a4038c-bcc1-405f-bd91-4292915d0198.gif">
    </div>
</details>

<details>
  <summary> 페이지네이션  </summary>
    <div markdown="1">
      <img src= "https://user-images.githubusercontent.com/91598778/213171772-95f8b7a0-0cce-4811-a29f-54f51e74e464.gif">
    </div>
</details>



<br />

## 📌배포링크

https://pre-onboarding-8th-4-4.vercel.app/

<br />
<br />


 
## 😊협업과정

본 프로젝트는 하나의 결과물을 내기 위해 동료학습을 중점으로 하여 진행하였습니다. 각자 자신이 구현한 코드에 대해 **어떠한 목적을 갖고 해당 방식을 선택하여 기능을 구현하였는가**의 설명과 **팀원들이 구현한 코드에 대한 피드백** 및 리팩토링하는 방식으로 Best Practice를 채택하였습니다.

- Best Pracitce를 찾아가기 전, 최적화된 과정을 찾고자 토론을 통해 아래와 같이 **과제를 나눌 단위**를 지정하였습니다.

- 개발하기에 앞서 초기에 과제를 위와 같이 큰 단위들로 나눈 뒤 같이 프로그래밍하는 방식의 프로세스를 선택하였습니다. 팀원 모두 화면 공유 기능을 사용하며 함께 실시간으로 코드를 작성하며 디버깅하면서 에러에 대해 함께 고민하고 대처하며 다양한 피드백을 주고 받으며 해결해나갔습니다.

<br />

#### 💡팀 코드 컨벤션

- git commit message 컨벤션

| 커밋 유형        | 의미                                                         |
| ---------------- | ------------------------------------------------------------ |
| Feat             | 새로운 기능 추가                                             |
| Fix              | 버그, 기능 수정                                              |
| Docs             | 문서 수정                                                    |
| Style            | 코드 formatting, 세미콜론 누락, 코드 자체의 변경이 없는 경우 |
| Refactor         | 코드 리팩토링                                                |
| Test             | 테스트 코드, 리팩토링 테스트 코드 추가                       |
| Chore            | 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore           |
| Design           | CSS 등 사용자 UI 디자인 변경                                 |
| Comment          | 필요한 주석 추가 및 변경                                     |
| Rename           | 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우          |
| Remove           | 파일을 삭제하는 작업만 수행한 경우                           |
| !BREAKING CHANGE | 커다란 API 변경의 경우                                       |
| !HOTFIX          | 급하게 치명적인 버그를 고쳐야 하는 경우                      |
| Setting          | prettier, eslint 등 전역 설정 변경, 삭제, 추가하는 경우      |
| ReadMe           | 리드미파일 추가, 수정, 삭제                                  |

<br />

## 💯과제목표

#### 댓글 불러오기,수정,삭제 동작하도록 기능구현

- 댓글 불러오기 기존의 작성해둔 댓글 수정 삭제 동작하도록 기능 구현

#### 페이지네이션

- 한페이지당 8개의 댓글이 나오게 만들었습니다.

#### 댓글작성

- 댓글작성 가능하며 작성시 첫번째 페이지로 이동


<br />

## ✅Best Practice 및 채택 근거

**1. 미들웨어 적용**

- Devtools를 사용할 수 없는 경우 redux-logger를 사용하여 리듀서가 실행되기 전과 후를 쉽게 비교가능합니다.
- createApi에서 반환하는 미들웨어를 등록하여 폴링, 가비지 컬렉션 등을 수행할 수 있게 했습니다.

<img src="https://media.discordapp.net/attachments/1065250452821774407/1065253714354511973/2023-01-18_9.57.51.png" />

<br />

**2. redux를 사용해서 비동기 처리 - 댓글 CRUD**

https://github.com/wanted-pre-onboarding-frontend-team4/pre-onboarding-8th-4-4/blob/69c7d77d25464bd7054a3b3d47621d12764df260/src/api/comments.tsx#L28-L55

- 비동기 처리 댓글 CRUD는 RTK(Redux-Toolkit) Query를 사용하여 구현했습니다.
- RTK Query는 Redux Toolkit core의 위에서 작성되었고, RTK의 API들은 createSlice와 createAsyncThunk를 확장해서 만들어졌습니다. 따라서 작성해야 하는 코드의 양이 줄어드는 효과를 기대할 수 있었습니다.
- 또한 여러개의 커스텀 hooks들이 다른 파일들에 있는 것 보다 한곳에 위치하는게 요청, 캐시 무효화, 공통 앱 설정을 관리하기가 더욱 쉽다고 판단되어 RTK Query를 사용하였습니다.

<br />

**3. 페이지네이션**

https://github.com/wanted-pre-onboarding-frontend-team4/pre-onboarding-8th-4-4/blob/69c7d77d25464bd7054a3b3d47621d12764df260/src/components/Paginations.tsx#L10-L55

- 페이지네이션 컴포넌트를 따로 분리하여 재사용성을 높였습니다.
- 페이지네이션에서 페이지 번호를 클릭하면 props로 넘어온 onChage 함수를 통해 페이지 번호를 업데이트 하고 페이지 번호의 변경에 따라 useGetCommentsQuery가 다시 호출되면서 페이지 마다 보여지는 댓글이 달라지도록 구현했습니다.

<br />

## 📁폴더구조

```
src
 ┣ api
 ┃ ┗ comments.tsx
 ┣ components
 ┃ ┣ CommentForm.tsx
 ┃ ┣ CommentList.tsx
 ┃ ┗ Paginations.tsx
 ┣ store
 ┃ ┗ store.ts
 ┣ styles
 ┃ ┗ GlobalStyle.ts
 ┣ App.tsx
 ┗ index.tsx

```

<br />

## 🛠사용기술

<div align=left>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white" >
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white" >
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white" >
<img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white" >
<img src="https://img.shields.io/badge/Redux DevTools-F15F5F?style=for-the-badge&logo=Redux DevTools&logoColor=white" >
<img src="https://img.shields.io/badge/REDUX LOGGER-41DAFB?style=for-the-badge&logo=REDUXLOGGER&logoColor=white" >
 </div>

<br />
