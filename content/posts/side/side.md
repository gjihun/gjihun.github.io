---
title: "Web developer path"
path: "/side/01"
tags: ["side"]
featuredImage: "./pen.jpg"
excerpt: Traversy Media 강의 정리 및 요약
created: 2020-05-13
updated: 2020-05-13
---

웹 개발자로서 거쳐야하는 전체적인 흐름      

## Front-end

시작은 **화면 개발자 (FrontEnd)** 에서 시작한다.     
최근 React, Vue와 같은 프론트 개발이 활발하게 이루어지고 있고     
이에 관한 기술들이 많이 나오고 있기 때문에 프론트에서 많이 시작한다.

### 운영체제      

리눅스와 윈도우 두개가 있다.      
현장에서 리눅스를 많이 사용하기에 리눅스를 선호한다. 

### Text Editor
  
여러 텍스트 에디터들이 있다.       
이런 텍스트 에디터들 중 무엇이 있는지 알아봐야한다.     
다만 VScode 가 압도적으로 많이 쓰인다.     


### 웹 브라우저

크롬과 파이어폭스가 있다.       
크롬은 F12를 누르면 나오는 개발자 도구의 존재와 console 기능을 지원해주기 때문에 굉장히 좋다.      
특히 크롬의 확장 기능은 다양해서 좋다.    

### Terminal

Git Bash나 PowerShell
그리고 배워야 할 두가지가 더 있다. CL, SSH이다.

SSH 의 경우 보안관련 문제를 한번에 해결해준다.     
클라이언트와 서버사이에서의 키를 서로 나누어 가지고 있어     
통신관련된 작업을 할 때 보안 과정을 생략하게 해준다.

### UI 목업용 그래픽 도구들

실적인 개발자가 아니면 실제 UI를 다루는 방법을 배우지 않는다.

- Photoshop 
- Stetch
- AdobeXD 

같은 도구들로 목업 mock-up 이미지를 만든다.     
기획서를 만들때 가장 중요한 작업이다.    

IA, Flow chart, 화면 설계 과정에서 자주 써먹는다.


### HTML CSS

웹개발자의 첫 발걸음으로 HTML과 CSS를 잘 배워놓아야한다.     
CSS로 
* font 
* color 
* position 
* box model 
같은 기본적인것들은 다룰줄 알아야하며      
CSS 자체를 마스터할 정도로 실력을 쌓을 필요는 없다.

마지막으로 모든 디바이스에서 보여지도록 하는 반응형 디자인을 만드는 것

- Viewport mata tag 사용법     
- Media Queries      
- Fluid widths    
- rem unit over px    

같은 개념들을 미리 알아놓아야 한다.

card 나 alert 창      
특히 modal 창의 경우     
개인 스타일로 하고싶다면    
sass로 만드는 법이 가장 좋다.


### CSS FrameWork

CSS프레임 워크는 개발 속도를 확연하게 줄여준다.

- Bootstrap
- Materialize
- Bulma

이 셋 중에서 하면 된다.
하지만 간단한 것들은 만들수 있어야한다.

### Vanilla Javascript

바닐라 자바스크립트를 공부해야한다.    
페이지를 역동적이게 만들어주는 JS는 React나 Node.js를 배워도      
결국 심도있게 배워야한다.
파이썬을 배우더라도 그렇다.

- DOM    
- Json    
- Ajax    
- ES6    

에 관련되어서  많은 것들을 배워야한다.

목표는 프로토 타입까지 마스터
ES6에서 끝나면 안된다.


### 추가로 배워야 할 것

**Git**과 **Github** 사용 방법       
브라우저 개발 도구가 어떤게 있는지 알아봐야한다.     
탬플릿을 만들고 디버그할때 개발자 도구가 없이는 고치기가 힘들다.
구글 코드로 고친다.          
플러그인을 찾아 쓰자        
린트를 잘 사용하게 해준다.       
VS코드 표현 방법을 익히면 빠르게 개발을 할 수 잇고 간편하게 만들수 있다.

### npm yarn axios

npm 과 yarn 설치하고 사용법을 익혀두어야한다.          
chocholatey 가지 설치해서 사용방법을 알면 좋다.       
어떤 패키지가 있는지만 알아도 될듯하다.          

axios 를 설치하는 방법과     
axios가 어디에서 사용하는지 알아봐야한다.     
특히 webpack을 설치하는걸 알아두면 좋다.
Vue나 React에서 지원해준다.


### 도메인 등록
구글 도메인을 사용해서 등록하는걸 추천

### 호스팅 관리하기
정적 호스팅 사이트인 Netlify 와 GitLab에 가서 사용법을 익히자

### SSL Certificate

FTP, SFTP      
SSH      

CL & git      

### 전체적인 할일

- 개인용 웹사이트를 만들거나 작은 비지니스 로직 만들기
- 모바일에 적합하게 만들기
- CSS 애니메이션을 만들기
- CSS 프레임 워크를 사용해서 만들기
- React와 Vue 둘 중 하나를 사용


### ServerSide 

서버 사이드 언어
- 파이썬
- C#
- Go
- Java

서버사이드 랜더링 <=> SPA
클라이언트 쪽에서 사이트를 생성하는게 아닌    
서버쪽에서 사이트를 직접 날려주기에         
사이트 로딩속도가 빠르다.       

NEXT React   
NUXT Vue       

Gatsby React       
Gridsome Vue       


### Front Javascript Framework

- Vue
- React
- Angular

Vue가 입문하기 쉽다.           
React는 커뮤니티가 가장 활발하게 활성화 되어있다.        
Angular는 마지막 수단이다.        
Svelte는 굉장히 빠르다.


### State Management

React의 Redux content API with hook          
Vuex      
Angular의 Service, Ngrx       

### GraphQL

이게 뭔지 알아야한다.       
지금은 공부하지 말고 있다는 정도만 알고 있자           
나머지 개념 정리후 공부시작     


