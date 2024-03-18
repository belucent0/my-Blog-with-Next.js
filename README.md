## 프로젝트 소개

Next.js에 기반하여 개발한 블로그 입니다.
모바일 반응형 디자인을 적용하였습니다.
[접속하기](https://vividnow.site)

## 개발 기간 및 인원

-   23.05.18 ~ 23.06.22(5주)
-   이후 비정기적인 확장 및 보수 지속
-   1인(김재광, FullStack : Front-End, Back-End, Infra)

![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbpe9QR%2Fbtsm4C3eYzZ%2FvWuJShOv9RXEagm7pbVCGK%2Fimg.png)

## 기획의도

네이버나 티스토리, 브런치 등 이미 안정적인 블로그 서비스는 많습니다. 하지만 다른 누군가가 만든 서비스이지요.
수년 전 막연히 꿈꾸기 시작했던 서비스를 '내가 직접 만든다'는 것, 또 개발뿐만 아니라 서비스를 직접 운영하며 '개발자로서 역량과 세상을 바라보는 안목을 기른다는 것'이 제게 큰 의미가 있습니다.

설명 보기 https://veams.tistory.com/112

## 사용 기술 스택 및 서비스

-   Language: TypeScript
-   Front-End : Next.js, React, TailwindCSS
-   Back-End : Node.js, Next.js, MongoDB
-   Infra: AWS(ECR, AppRunner), Github Actions, Docker
-   etc: Swagger

## 서비스 구성

-   JWT 기반의 인증, 인가, 소셜로그인, (이메일 가입한) 계정 삭제
-   방명록 작성, 삭제
-   Markdown을 활용한 블로그 포스팅 및 게시

## 시퀀스 다이어그램 - JWT 기반의 회원탈퇴 로직

<div align="center"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FoCfUk%2FbtsFRh2xbxA%2FSGPMdwG0Zpzyk5sk3G2Y90%2Fimg.png" width="70%" height="70%"/></div>
<br />

회원탈퇴 로직은 사용자가 로그인을 한 후, 비밀번호 확인을 거쳐, 계정 삭제를 진행합니다.

-   `인증 및 인가는 NextAuth.js(Auth.js)`를 사용하였으며, 기능 구현 및 관리의 편리성을 얻었습니다.
-   DB서버 요청을 줄이고자, Session 대신 JWT의 `Access Token` 으로 관리됩니다.
-   현재 복잡한 기능이 없는 프로젝트이기에, Refresh Token은 도입하지 않았습니다. 탈취시 관리 부담이 상승하기 때문입니다. 대신 토큰 유효기간을 비교적 짧게 유지하기로 했습니다.

## 서비스 아키텍쳐(Infra 변경: Vercel -> AWS App Runner)

<div align="center"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F8cPxj%2FbtsFQsiYX7X%2FA3e59CvjIgdlU3KApP82R1%2Fimg.png" width="100%" height="100%"/></div>

-   Vercel에서 배포 후, Cold Start 지연이 발생했습니다. 이를 해소하고자 AWS App Runner로 마이그레이션 했습니다.
-   App Runner는 프로비저닝된 인스턴스를 유지합니다. `항시 Warm Start로 동작`하여, Cold Start를 피할 수 있었습니다.

## 배포 관련 고민했던 사항

#### App Runner: `소규모+낮에 집중된 트래픽 고려` → `AWS ECS Fargate 기반 서비스` 선택

-   최소 1,000ms 이상의 Cold Start 지연 해소 목적으로, Vercel에서 AWS로 마이그레이션
-   App Runner는 Tokyo region에 한정되지만 비용적인 이점이 너무 크고, Auto scaling에도 자유로워 선택
-   Auto Scaling, Load Balancing 간편 설정 → `고가용성`을 위한 `인프라 절차 간소화`
-   유휴 상태시 `프로비저닝된 인스턴스`로 동작, `CPU 비용x` → EC2 예상 비용 대비 약 50% `비용 절감`

## 프로젝트에서 배운 점

### 배포 변경(Vercel→AWS)으로 ‘1,000ms 이상의 Cold Start 해소’ 및 비용 최적화

#### 문제상황

`Vercel은 AWS Lambda 기반의 서버리스` PaaS 입니다. 편리성으로 개발자들이 소규모의 React 혹은 NextJS 앱을 이곳에 배포합니다. 문제가 있습니다. AWS Lambda는 작동 특성상 이벤트가 발생하고나서야 코드 다운로드 등 런타임을 구성 과정에서 `Cold Start 지연이 존재`합니다. 마치 `잠자고 있다 갑자기 깨어나 일할 준비`하는 것입니다. 저 역시 초기에 Vercel을 이용하여 프로젝트를 배포하였기 때문에 Cold Start의 `지연이 1~2초 가량 발생`했습니다.

<div align="center"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbyzkKl%2FbtsFRjF3Uh5%2FAz3Xa9xLhvL0dWzhC8rZ2k%2Fimg.png" width="70%" height="70%"/></div>

<div align="center">▲ AWS Lambda의 이벤트에 따른 작동 특성 : 초기 Cold start 발생</div>

#### 문제해결단서

<div align="center"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FkS1c0%2FbtsFUHZK1ma%2Fx49AAOuIogwux5KpEyQRvK%2Fimg.png" width="70%" height="70%"/></div>
<div align="center">▲ Vercel, EC2, App Runner 특징 비교</div>
<br />

1.  Cold Start를 해소하고자 Vercel은 `Edge Functions` 기능을 제공합니다. 일종의 CDN과 유사합니다. 이 기능을 사용하기 위해선 `Vercel에 특화된 코드 수정이 필요`합니다. 즉 `종속성이 상승`합니다. Vercel은 증가하는 트래픽에 타사보다 높은 비용을 부과하는데, 종속성 상승으로 플랫폼간 마이그레이션에 대한 딜레마가 생길 수 있습니다.

2.  대안이 있습니다. Vercel 대신, AWS ‘EC2’ 같은 VM에 배포하면 Cold Start 문제는 해결됩니다. 24시간 구동되는 온디맨드의 t2.micro 이용시 월 10달러 비용이 예상됩니다. 문제는 아직 `이 앱의 사용자는 적고, 트래픽도 불규칙`합니다. 사실 `사용자가 전혀 접속하지 않을 때도` 많습니다. `따라서 EC2는 비효율적`일 수 있습니다.

    <div align="center"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FJTjUr%2FbtsFU5TBMZp%2FPfLLydWa0uGA0LFFyInzQ0%2Fimg.png" width="70%" height="70%"/></div>

<div align="center">▲ 불규칙한 트래픽 상승에 따른 예상 CPU 사용률 그래프</div>
<br />
  
3. AWS에서 제공하는 `App Runner`를 고려해볼 수 있습니다. App Runner는 `‘컨테이너화된 앱을 위한 서버리스 서비스’`입니다. Lambda와 달리 ‘프로비저닝된 인스턴스를 제공’ 합니다. 잠자다 일하는 것이 아닌, `항상 실행 준비 상태로 대기`하는 것입니다. 이 때문에 사용자의 요청 발생 즉시 CPU를 사용하는 `Warm Start로 작동`합니다. 한편, `사용자의 요청이 없으면 CPU 비용을 과금하지 않아` 인프라 관리 비용은 낮출 수 있습니다.

#### 결론(문제해결전략)

`약 1000ms~2000ms 지연`을 유발한 `Cold Start 해소`를 위해 Vercel에서 App runner로 배포 방식을 변경하였습니다. 대신 무료로 사용했던 Vercel 대신, AWS를 이용하게 되어 `매월 5$ 가량의 지불`하게 되었습니다.

## Swagger를 이용한 API Docs

-   Restful API의 문서를 자동으로 구성해주는 Swagger를 사용하여 작성했습니다.
-   API 문서 URL : [블로그 API Docs.](https://vividnow.vercel.app/api-docs)
-   외부 이용자의 접근을 방지하고자 로그인 계정을 설정했습니다. admin / 1234

<div align="center"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbRa2Iu%2FbtsFU9VZSiH%2FjN7OgX9V7I4hAois6RDIo1%2Fimg.png" width="70%" height="70%"/></div>
