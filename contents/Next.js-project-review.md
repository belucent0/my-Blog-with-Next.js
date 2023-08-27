---
title: "블로그, Next.js로 직접 개발하기"
subtitle: "블로그 개발기록 입니다."
date: "2023-06-22"
---

## 프로젝트 소개
Next.js에 기반하여 개발한 블로그 입니다.  
모바일 및 태블릿 반응형 디자인을 적용하였습니다.
[→ Github 저장소](https://github.com/vividnow/my-Blog-with-Next.js)

## 개발 기간 및 인원
- 23.05.18 ~ 23.06.22(5주)
- 1인(김재광, FullStack)

![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbpe9QR%2Fbtsm4C3eYzZ%2FvWuJShOv9RXEagm7pbVCGK%2Fimg.png)

## 기획의도
2018년, 우연히 제 손에 들어온 <해커와 화가>라는 책이 있습니다. 책의 저자는 에어비엔비 등을 배출해서 유명한 미국의 스타트업 엑셀러레이터 'Y Combinator'의 공동창업자인 폴 그레이엄(Paul Graham)입니다. 그가 여러 해 동안 작성해 온 에세이를 묶어서 낸 결과물이 <해커와 화가>인 것입니다. 신선한 책의 제목만큼이나 내용도 흥미롭답니다. 세상을 바라보는 그만의 통찰력과 새로운 관점이 많이 담겨있어 즐겨 읽을 수 있었습니다. 프로그래밍에 지식이 없던 당시였음에도, '무엇이 좋은 프로그래밍 언어인가?'를 논하면서 LISP에 대한 그의 애정을 드러내는 내용 역시도, 제 마음을 사로 잡았습니다. 인터프리터니, 어셈블러니 외계어처럼 등장하는 키워드들도 손수 찾아볼 정도로요.


좋아하는 영화나 책을 반복해서 접하다보면, 후속 시리즈도 소비하고 싶어지기 마련입니다. 동시에 그 컨텐츠의 제작자가 어떤 사람인지에 대해서도 궁금해지기도 합니다. 책에는 담겨있지 않은 그의 새로운 에세이를 찾고 싶은 마음에 구글링을 하다보니, 폴 그레이엄의 블로그를 발견할 수 있었습니다. 비교적 투박하고, 전형적이지 않은 블로그의 UI로 보아 아마 폴 그레이엄이 직접 개발한 것이겠죠? 그 덕분에 저는 그가 10대 시절 nerd(?)로서, 이후 프로그래머로서, 그리고 스타트업 창업자이자 투자자로서의 삶의 경험이 녹여진 흥미로운 그의 에세이들을 더 읽으며, 폴 그레이엄이라는 인물에 대해 더 알 수 있었습니다. 이렇게 블로그라는 서비스는 한 개인이 자기 삶을 표현할 수 있게 돕고, 어떤 컨텐츠를 여러 사람들과 공유할 수 있는 역할을 한 것입니다. 이때부터 손수 만든 블로그에 포스팅도 할 수 있으면 좋겠다는 생각을 품기 시작했습니다.


네이버나 티스토리, 브런치 등 이미 안정적인 블로그 서비스는 많습니다. 하지만 다른 누군가가 만든 서비스이지요. 수년 전 막연히 꿈꾸기 시작했던 서비스를 '내가 직접 만든다'는 것, 또 개발뿐만 아니라 서비스를 직접 운영하며 '개발자로서 역량과 세상을 바라보는 안목을 기른다는 것'이 제게 큰 의미가 있습니다.

## 사용 스택 및 서비스
- Front-End : Next.js, TypeScript, TailwindCSS
- Back-End : Node.js, Next.js
- DB : MongoDB
- Infra : Vercel, AWS S3
- OAuth : Github, 카카오톡, 네이버
- OpenAPI : 채널톡, Swagger

## 서비스 아키텍쳐
![images](https://vividnowblog.s3.ap-northeast-2.amazonaws.com/%EB%B8%94%EB%A1%9C%EA%B7%B8+%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98.png)

## 서비스 구성
- 반응형 웹
- 소셜로그인 활용한 방명록 작성 기능
- 프로젝트 이력 페이지
- 블로그 운영자 소개 페이지
- 다크모드
- 채널톡API 연결
- Vercel를 통한 무중단 배포
- Vercel Analytics
- 이슈 트래커 Sentry
- Markdown을 활용한 블로그 포스팅

### 트러블슈팅
- 개발 완료 후, 기술 부채 쌓이기 전 JS → TS 마이그레이션을 통한 오타 및 경로 에러 수정
- 배너 구현시, 닫힌 배너가 새로고침 시 잠시 등장 후 사라짐 → useState(true) 값을 false로 변경하여 해결 [→링크](https://veams.tistory.com/113)

### 기술적 의사결정
- Next.js - 서비스 특성 고려, SSR/SSG + React Hook + 서버 제작도 가능한 풀스택 프레임워크 선택
- MongoDB - 단계별 개발 전략 (작업이력→포스팅→상담 관련), 기능 추가에 따른 DB 유연성 확보
- Vercel - 무중단 배포 및 HTTPS 적용 편의, 서버리스로 동작하여 인스턴스 비용 부담 감소

## Swagger를 이용한 API Docs 
- Restful API의 문서를 자동으로 구성해주는 Swagger 프레임워크를 사용해서 작성했습니다.
- API 문서 URL : [블로그 API Docs.](https://vividnow.vercel.app/api-docs)
- 외부 이용자의 접근을 방지하고자 로그인 계정을 설정했습니다. admin / 1234

![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fd0h3nS%2FbtspCmd0jiw%2FHJch0NGWw1maitUoaTiNW0%2Fimg.png)
