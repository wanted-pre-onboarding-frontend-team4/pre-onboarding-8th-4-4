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

| <img src="https://avatars.githubusercontent.com/u/104765779?v=4" width="120" height="120" /> | <img src="https://avatars.githubusercontent.com/u/92634711?v=4" width="120" height="120" /> | <img src="https://user-images.githubusercontent.com/105702862/205853151-2fa17dea-1d5d-47ba-9f54-94cd175a5e19.jpeg" width="120" height="120" /> | <img src="https://avatars.githubusercontent.com/u/44992033?v=4" width="120" height="120" /> | <img src="https://avatars.githubusercontent.com/u/91598778?v=4" width="120" height="120" /> |
| :------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: |
|                           [tlsrb100](https://github.com/tlsrb100)                            |                           [tnals545](https://github.com/tnals545)                           |                                                     [KKKHun2](https://github.com/KKKHun2)                                                      |                          [hyejineee](https://github.com/hyejineee)                          |                          [jeongmin7](https://github.com/jeongmin7)                          |
|                                          성환(팀장)                                          |                                         수민(팀원)                                          |                                                                   용훈(팀원)                                                                   |                                         혜진(팀원)                                          |                                         정민(팀원)                                          |

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

1. <a href="https://github.com/wanted-pre-onboarding-frontend-team4/pre-onboarding-8th-3-4/wiki/1.-%EC%9E%85%EB%A0%A5%ED%95%9C-%ED%85%8D%EC%8A%A4%ED%8A%B8%EC%99%80-%EC%9D%BC%EC%B9%98%ED%95%98%EB%8A%94-%EB%B6%80%EB%B6%84-%EB%B3%BC%EB%93%9C-%EC%B2%98%EB%A6%AC-%EC%A0%84%EB%9E%B5">입력한 텍스트와 일치하는 부분 볼드 처리 전략</a>
2. <a href="https://github.com/wanted-pre-onboarding-frontend-team4/pre-onboarding-8th-3-4/wiki/2.-%EA%B2%80%EC%83%89%EC%96%B4-%EC%97%86%EC%9D%8C-%EC%B6%9C%EB%A0%A5">검색어 없음 출력</a>
3. <a href="https://github.com/wanted-pre-onboarding-frontend-team4/pre-onboarding-8th-3-4/wiki/3.-Cache-Storage%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-Api-%ED%98%B8%EC%B6%9C-%EC%B5%9C%EC%A0%81%ED%99%94">Cache Storage사용하여 Api 호출 최적화</a>
4. <a href="https://github.com/wanted-pre-onboarding-frontend-team4/pre-onboarding-8th-3-4/wiki/4.-%EC%9E%85%EB%A0%A5%EB%A7%88%EB%8B%A4-API-%ED%98%B8%EC%B6%9C%ED%95%98%EC%A7%80-%EC%95%8A%EB%8F%84%EB%A1%9D-API-%ED%98%B8%EC%B6%9C-%ED%9A%9F%EC%88%98%EB%A5%BC-%EC%A4%84%EC%9D%B4%EB%8A%94-%EC%A0%84%EB%9E%B5-%EC%88%98%EB%A6%BD-%EB%B0%8F-%EC%8B%A4%ED%96%89">입력마다 api호출 전략</a>
5. <a href="https://github.com/wanted-pre-onboarding-frontend-team4/pre-onboarding-8th-3-4/wiki/5.-%ED%82%A4%EB%B3%B4%EB%93%9C-%EC%A1%B0%EC%9E%91-%EA%B5%AC%ED%98%84">키보드 조작 구현</a>

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
<img src="https://img.shields.io/badge/Antd-61DAFB?style=for-the-badge&logo=Antd&logoColor=white" >
<img src="https://img.shields.io/badge/redux-017BE8?style=for-the-badge&logo=redux&logoColor=white" >
<img src="https://img.shields.io/badge/Redux DevTools-F15F5F?style=for-the-badge&logo=Redux DevTools&logoColor=white" >
<img src="https://img.shields.io/badge/REDUX-LOGGER-41DAFB?style=for-the-badge&logo=REDUXLOGGER&logoColor=white" >
 </div>

<br />
