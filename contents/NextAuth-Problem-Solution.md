---
title: "모달창으로 로그인 페이지의 느린 전환 문제를 해결"
subtitle: "NextAuth에 내장된 커스텀 로그인 페이지의 첫 렌더링의 느린 속도를 해결하는 방법, 4000ms→80ms"
date: "2023-08-29"
---

## 1. 문제 상황 및 배경  - 로그인 페이지 이동지연
Vercel 환경에서 Next.js 13 버전에서 NextAuth.js 라이브러리를 사용했고,
이 라이브러리에 내장된 커스텀 로그인 페이지를 활용**하여 로그인 페이지를 구현해놨다.
 
문제는 이 페이지로 이동하는 **속도가 너무 늦었다.**   
**로그인을 하는 /login URL로 첫 렌더링시**  
**상황에 따라 약4초~7초까지 소요된 후 페이지로 이동**이 되었다.
 
만약, 유저들이 로그인을 하기 위해 버튼을 눌렀을 때 이들은 무엇을 느낄까?
어떤 동작을 행하기 위한 버튼을 누르고도
아무 반응이 없다면,
무언가 제대로 동작을 하지 않나하고 혼동이 있을 수 있다.

![images](https://blog.kakaocdn.net/dn/dimWJO/btssfRCqWrU/HBRH20zLZEaLoWVuqlk6mk/img.gif)


### 임시대처
그래서 일전에 유저들이 버튼 클릭 후 대기할 수 있도록 **로딩스피너 기능을 추가**해놨었다.  
하지만 속도면에서 개선된 것은 아니었다.


자, 얼마나 늦고 있는지 기존에 Vercel에서 서버리스 함수로 동작한 기록을 살 필 수 있다.

![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FWTcgZ%2Fbtssk23Is2l%2FXGnRXkqVMERUH640vOOGsk%2Fimg.png)
![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbCsLgC%2Fbtssc8SfItc%2FDvZRxfjMN5fKoFJ17KYXV1%2Fimg.png)

## 2. 원인분석 시도
이런 문제가 나만 발생하나 싶었는데, 구글링을 해보니 [레딧](https://www.reddit.com/r/nextjs/comments/13al9y4/slow_performance_of_nextauth_with_nextjs_13/)에서 나와 같이 문제를 호소하는 사람이 여럿 있었다.  
심지어 나보다 더 지연이 되는 사람도 있었다.  

![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcStFZk%2FbtssfYuKilk%2F7ZkWsY50nIwT4CT4xl1B40%2Fimg.png)

로그인을 위해 도입했던 **NextAuth의 성능에 문제가 있을 것으로 추정**한다.  
소셜로그인 기능을 포함한 로그인 서비스를 편리하게 도입하기 위해 적용한 이 라이브러리가 아직 안정화되지 않은 것 같다.

댓글에 어떤 유저는 NextAuth를 사용하지 않는 것을 제안하고 있다.

NextAuth어딘가에 문제가 있는지 궁금해서 더 정확히 파악하려고 했지만
크롬 개발자도구로 확인했을 때, 내부에서 providers를 호출한 뒤의 응답으로 이어질 때까지 시간이 오랫동안 지연된다는 상황 말고는 구체적으로 원인을 지목할 수는 없었다.

정확한 원인 분석은 실패, 그렇다면 이 상황에서 어떻게 하는 것이 좋을까?


## 3. 문제해결 시도
첫 문제를 인지한지 두 달이나 계속 시간이 흐르고 있는 상태였다.
가끔 다시 코드를 보며 문득 고민하던 중 이번에서야 방법을 떠올렸다.

바로 **모달창**
다시 생각해보자, 만약 NextAuth의 로그인 페이지의 **느린 렌더링 속도 문제를 해결한다고 해도**
**사용자에게는 여전히 페이지를 이동하는 노력, 번거로움이 추가적으로 발생한다.**

NextAuth 내부의 무엇이 정확히 문제인지는 알 수 없었으나,
이 경우, 라이브러리에서 제공하는 커스텀 **로그인페이지로 넘어갈 때만 문제가 생겼으므로**
**페이지 이동을 하지 않고도 로그인을 할 수 있도록 개선**하면 이 문제를 해결할 수 있을 것이다.

이제 페이지 이동의 느린 속도의 원인을 탐색할 것이 아니라,
**사용자가 더 편리하게 로그인을 할 수 있는 방법**을 탐색하는 것이 나을 수 있다는 생각이 든다.
NextAuth의 문제와 씨름하기 보다, NextAuth의 특성과 장점을 잘 살리는 방법을 찾은 것이라 생각한다.

사실 로그인을 위한 모달창은 그 자체의 편의성으로 이미 널리 상용되고 있는 방법이기도 하다.
 

### 4. 문제해결방법 - 모달창 도입
모달창 도입은 [NextUI](https://nextui.org/docs/components/modal)라는 라이브러리의 도움을 받았다.

이제 소셜 로그인 버튼을 마주하기까지 아주 짧은 시간이 소요된다.

![images](https://blog.kakaocdn.net/dn/pbHuA/btssqvdrJaZ/0pwvs7jmUhlnJTzmeY0HBK/img.gif)

![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FLjefy%2Fbtssk8XaNnS%2FkOl7um9unAP3jx6Q8Afz2K%2Fimg.png)

소셜로그인 버튼을 보는데까지 얼마나 걸리게 되었을까?
 
넉넉하게 잡아,   
모달창이 열린 뒤, 바로 닫는 시간까지 포함하여 측정해보아도 80ms이 되지 않게 되었다.
 
NextAuth상에 문제가 있었고, 내부의 정확한 원인은 분석하지 못한 해결 방법이었지만   
로그인을 위한 창 로딩에 대해 **약4000ms -> 약80ms** 로 좁혀 사용자 경험은 개선할 수 있었다.


### 요약
1. 소셜 로그인 버튼을 사용자가 편리하게 이용하는 것이 개발목적
2. 기존의 NextAuth를 통한 로그인 페이지의 렌더링 속도가 느림
3. NextAuth 성능문제로 페이지 렌더링시 지연이 생기는 것으로 추정
4. 로그인 페이지를 사용할 이유가 없다 -> 로그인 페이지의 버튼을 모달창 내 버튼으로 대체하여 해결