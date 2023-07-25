## 프로젝트 소개
Next.js에 기반하여 개발한 블로그 입니다.
모바일 반응형 디자인을 적용하였습니다.
[접속하기](https://vividnow.vercel.app)

## 개발 기간 및 인원
- 23.05.18 ~ 23.06.22(5주)
- 1인(김재광, FullStack)

![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbpe9QR%2Fbtsm4C3eYzZ%2FvWuJShOv9RXEagm7pbVCGK%2Fimg.png)

## 기획의도
네이버나 티스토리, 브런치 등 이미 안정적인 블로그 서비스는 많습니다. 하지만 다른 누군가가 만든 서비스이지요. 
수년 전 막연히 꿈꾸기 시작했던 서비스를 '내가 직접 만든다'는 것, 또 개발뿐만 아니라 서비스를 직접 운영하며 '개발자로서 역량과 세상을 바라보는 안목을 기른다는 것'이 제게 큰 의미가 있습니다.

설명 보기 https://veams.tistory.com/112

## 사용 스택 및 서비스
- Front-End : Next.js, TypeScript, TailwindCSS
- Back-End : Node.js, Next.js
- DB : MongoDB
- Infra : Vercel, AWS S3
- Library :  NextAuth.js, Lottie-player, headlessUI, next-themes 등
- OAuth : Github, 카카오톡, 네이버
- OpenAPI : 채널톡

## 서비스 아키텍쳐
![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb9BuM5%2FbtsmJidgB5J%2FRUn1M7EKSey6Abgqxfa830%2Fimg.png)

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
- Next.js - 서비스 특성 고려, SSR 장점+리액트 훅+서버 제작도 가능한 풀스택 프레임워크 선택
- MongoDB - 단계별 서비스 구현, 배포 전략(작업이력→포스팅→상담 관련), 기능 추가에 따른 DB 유연성 확보
- Vercel - 배포 및 HTTPS 적용 용이, SSR로 페이지 생성시 서버리스로 동작하여 인스턴스 관리 부담 감소