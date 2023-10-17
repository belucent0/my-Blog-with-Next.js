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
- 이후 비정기적인 확장 및 보수 지속
- 1인(김재광, FullStack)

![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbpe9QR%2Fbtsm4C3eYzZ%2FvWuJShOv9RXEagm7pbVCGK%2Fimg.png)

## 기획의도
2018년, 우연히 제 손에 들어온 <해커와 화가>라는 책이 있습니다. 책의 저자는 에어비엔비 등을 배출해서 유명한 미국의 스타트업 엑셀러레이터 'Y Combinator'의 공동창업자인 폴 그레이엄(Paul Graham)입니다. 그가 여러 해 동안 작성해 온 에세이를 묶어서 낸 결과물이 <해커와 화가>인 것입니다. 신선한 책의 제목만큼이나 내용도 흥미롭답니다. 세상을 바라보는 그만의 통찰력과 새로운 관점이 많이 담겨있어 즐겨 읽을 수 있었습니다. 프로그래밍에 지식이 없던 당시였음에도, '무엇이 좋은 프로그래밍 언어인가?'를 논하면서 LISP에 대한 그의 애정을 드러내는 내용 역시도, 제 마음을 사로 잡았습니다. 인터프리터니, 어셈블러니 외계어처럼 등장하는 키워드들도 손수 찾아볼 정도로요.


좋아하는 영화나 책을 반복해서 접하다보면, 후속 시리즈도 소비하고 싶어지기 마련입니다. 동시에 그 컨텐츠의 제작자가 어떤 사람인지에 대해서도 궁금해지기도 합니다. 책에는 담겨있지 않은 그의 새로운 에세이를 찾고 싶은 마음에 구글링을 하다보니, 폴 그레이엄의 블로그를 발견할 수 있었습니다. 비교적 투박하고, 전형적이지 않은 블로그의 UI로 보아 아마 폴 그레이엄이 직접 개발한 것이겠죠? 그 덕분에 저는 그가 10대 시절 nerd(?)로서, 이후 프로그래머로서, 그리고 스타트업 창업자이자 투자자로서의 삶의 경험이 녹여진 흥미로운 그의 에세이들을 더 읽으며, 폴 그레이엄이라는 인물에 대해 더 알 수 있었습니다. 이렇게 블로그라는 서비스는 한 개인이 자기 삶을 표현할 수 있게 돕고, 어떤 컨텐츠를 여러 사람들과 공유할 수 있는 역할을 한 것입니다. 이때부터 손수 만든 블로그에 포스팅도 할 수 있으면 좋겠다는 생각을 품기 시작했습니다.


네이버나 티스토리, 브런치 등 이미 안정적인 블로그 서비스는 많습니다. 하지만 다른 누군가가 만든 서비스이지요. 수년 전 막연히 꿈꾸기 시작했던 서비스를 '내가 직접 만든다'는 것, 또 개발뿐만 아니라 서비스를 직접 운영하며 '개발자로서 역량과 세상을 바라보는 안목을 기른다는 것'이 제게 큰 의미가 있습니다.


## 사용 스택 및 서비스
- Language: TypeScript
- Front-End : Next.js, React, TailwindCSS
- Back-End : Node.js, Next.js, MongoDB
- Infra: AWS(ECR, AppRunner), Github Actions
- etc: Swagger

## 서비스 구성
- 반응형 웹
- 소셜로그인을 활용한 방명록 작성
- 운영자 소개 및 프로젝트 이력 페이지
- 블로그 게시판
- Markdown을 활용한 블로그 포스팅
- 다크모드
- 채널톡API 연동하여 관리자와 채팅

## 기술적 의사결정
1. Next.js13: 유연한 SSR/SSG/CSR 선택과 서버 구성의 통합의 이점
2. App Runner: 소규모+낮에 집중된 트래픽 고려 → Fargate 기반의 App Runner 선택

## 서비스 아키텍쳐(Infra 변경: Vercel -> AWS App Runner)
- 변경 전
![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb9BuM5%2FbtsmJidgB5J%2FRUn1M7EKSey6Abgqxfa830%2Fimg.png)

- 변경 후(23.10.06)
![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FIJbKL%2FbtsytX3GWSK%2FG5bJrJDB74ckars3mKCfqK%2Fimg.png)

- Vercel의 Cold Start 이슈, 무료 플랜의 성능 한계로 AWS 로 이주
- Auto Scaling, Load Balancing 간편 설정(내장) → **인프라 구축 비용 절감**
- 유휴 상태시 **프로비저닝된 인스턴스**로 동작, CPU 비용x → **Fargate대비 비용 절감**

## 시퀀스 다이어그램
![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtHTe0%2FbtsyuJw3TBC%2FqyOivwkQeZkJr3MnztUp11%2Fimg.png) ![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbWCWl5%2FbtsyDyKrs41%2Fnz7dfxQwRCdxKtLiublOLK%2Fimg.png)

## 트러블슈팅
1. 배포 전환: Vercel의 **Cold Start**이슈 → App Runner **Provisioned Instance 유지**로 해소
2. SSR 단점 보완: CSR 대비 느린 페이지 전환 → 랜딩페이지 렌더링 직후, 개별 페이지 **prefetching** 작동 → 랜딩페이지 **빠른 진입 + 전환 속도 향상**
3. 로그인 페이지 이동시, 5~7초 가량 소요되는 문제:  
--> 로그인을 위한 NextAuth의 라이브러리 성능 문제가 존재하던 것으로 추정. 로그인 페이지를 따로 구성하는 대신, 모달창으로 구현하여 페이지 이동없이 로그인 가능하도록 수정 [→링크](https://veams.tistory.com/118)
4. 개발 완료 후, 기술 부채 쌓이기 전 JS → TS 마이그레이션


## Swagger를 이용한 API Docs 
- Restful API의 문서를 자동으로 구성해주는 Swagger 프레임워크를 사용해서 작했습니다.
- API 문서 URL : [블로그 API Docs.](https://vividnow.vercel.app/api-docs)
- 외부 이용자의 접근을 방지하고자 로그인 계정을 설정했습니다. admin / 1234

![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fd0h3nS%2FbtspCmd0jiw%2FHJch0NGWw1maitUoaTiNW0%2Fimg.png)