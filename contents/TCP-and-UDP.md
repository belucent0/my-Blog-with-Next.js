---
title: "서로 다른 데이터 전송방식, TCP VS UDP"
subtitle: "신뢰성이 중요한 TCP, 속도가 중요한 UDP. 왜 필요하며, 무엇이 서로 다를까? Wanted pre-onboading"
date: "2023-07-02"
---

신뢰성이 중요한 TCP, 속도가 중요한 UDP. 어디에 쓰는 개념이며, 무엇이 서로 다를까?

TCP와 UDP는 네트워크에서 사용하는 개념이다. 네트워크는 광의의 개념으로 보면 네트워크란 두 개 이상의 컴퓨터 간의 데이터 통신에 대한 이야기로, TCP와 UDP는 데이터를 주고 받을 때 어떤 규약 및 절차를 사용하느냐에 대한 내용이다.  


# TCP(Transmission Control Protocal)
속도 대신 연결성과 신뢰성이 중요한 상황(애플리케이션)에서 사용하는 통신 규약이다.

![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbHTm6B%2Fbtsmd0w8XxJ%2Ftw2mQHkSCmQ4RTEnJSZRJk%2Fimg.png)
![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqWYkY%2Fbtsl2JDBPXs%2FI5RGURkFw9pSEXKKwKNUjK%2Fimg.jpg)

예시를 들어보자. 핀란드로 유학을 떠난 민수(수신자)는 한국 음식이 그리워졌다. 핀란드 친구들과 한국 음식 파티를 하기로 한다. 한인마트에서 잘 팔지 않는 식료품(데이터)은 한국에 있는 친동생 경수(송신자)에게 부탁한다(SYN). 경수의 성격은 나름대로 꼼꼼하고 완벽을 추구한다. 책임감이 강해서 맡은 것은 끝까지 다 처리한다. 다만 속도는 다소 느릴 때가 있다.

친동생 경수는 형이 부탁한 물건들을 대형 마트에 간다. 구매 직전 카카오톡을 통해 형이 부탁한 식료품 목록을 다시 한 번 확인하고 구매한다. 형 민수에게 확인 받기 위해서, 구매한 물품을 사진으로 찍어서 보낸다(SYN, ACK). 민수는 응답한다. '고생했어. 잘 포장해서 보내줘~'라고 응답한다(ACK).

![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcgIhfM%2Fbtsl9wca9wH%2FKMasKvuM0ZPRfvLq6k7q9k%2Fimg.png)

그 뒤 동생 경수는 식료품들을 잘 포장하여, 우체국에 가서 택배 상자를 잘 접수한다. 방금 택배 상자를 잘 접수했다고 형에게 송장 번호 두 개를 잘 전달한다. 식료품(데이터) 부피가 너무 커서 작은 상자 두 개로 나누어(패킷) 보냈다고 한다.

민수는 택배가 핀란드까지 예상 하는 시간 내로 잘 도착하기를 기다린다. 택배를 받은 후, 한국에 있는 동생 경수에게 택배를 잘 받았노라고 메시지를 전달한다. 민수는 택배로 받은 식료품들 리스트를 확인해본다.

어라? 목록에서 팔도비빔면 소스와 골뱅이 통조림이 빠져있다. 두 개 택배 상자 중에 하나만 도착했나보다. 경수에게 목록에서 내가 이전에 말했던 식료품이 빠졌노라고 이야기 한다. (패킷 유실)

경수가 상황을 파악해보니, 택배 상자 하나가 핀란드 택배사에서 유실됐음을 확인한다. 경수는 민수가 받지 못한 식료품들을 다시 포장하여 전달한다. 민수는 지난 번에 빠졌던 물품까지 잘 받았고, 고맙다고 인사를 보낸다. 

이처럼 TCP는 데이터 전송시 연결성을 중시한다. 즉 안정적인 데이터 전송을 지원한다. (데이터를 요청하는) 클라이언트와 (데이터를 보내주는) 서버 간의 데이터 전송을 보장하기 위하여 연결 설정, 확인 및 종료 과정을 수행한다. (3-way handshaking으로 연결, 4-way handshaking으로 연결 해제)

신뢰성 있는 데이터 전송을 보장하기 위해, 패킷 손실, 중복, 순서 변경 등의 문제를 감지하고 복구한다. 데이터를 보냈으면, 잘 받았는지 확인하고, 데이터 송신이 실패했으면 다시 데이터를 보내기도 하는 것이다. 데이터 전송이 보장되어야 하는 애플리케이션(파일 전송, 이메일, 채팅)에서 사용하는 통신 규약이다.

![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FOWsuN%2Fbtsl6MsIzvh%2FkOxHM0vKAK9F8PaWxWlO61%2Fimg.jpg)

### TCP 정리
- 높은 신뢰성, 연결성을 보장 : 데이터가 손실 될 경우 재전송
- (데이터 전송 전후로 3-way handshaking으로 연결 설정, 4-way handshaking으로 연결해제)
- 데이터의 전송 순서를 보장
- 흐름(Flow) 제어 및 혼잡(Congestion) 제어 : 데이터 처리 속도 제어
- 파일전송, 채팅, 이메일 서비스에 사용
- 1:1 통신에 적합
- 속도 느림

![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdDDV6P%2Fbtsl5iZLl1F%2Fp3cJ7TUY2xKgoG4elpXI31%2Fimg.png)


# UDP(User Datagram Protocol)
앞서 설명한 TCP를 사용하면 신속한 데이터 전달이 중요하다. 신뢰성은 보장하지 않는다. 데이터를 전송하고 받을 뿐이며, 패킷 손실이나 오류 발생 시 복구를 시도 하지 않는다. 즉 데이터 재전송을 하지 않는다. 속도가 중요하여 멀티미디어 서비스와 같이 영상 통화, 온라인 게임, 실시간 스트리밍 시에 사용한다.

원격 화상 회의에 참여하기 위해 ZOOM 서비스를 사용하다가, 네트워크에 문제가 생겨 중간 중간 끊김이 발생해 상대방 목소리를 듣지 못한 적이 있는가? 하지만 문제가 있던 부분을 제외하고 다른 부분은 계속 들을 수 있게 되어, 듣지 못한 말은 실시간으로 양해를 구하고 다시 물어볼 수 있다. 

### 어느 상황에서 UDP 에 대한 요구가 생길까?
![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCxtkl%2Fbtsmd22Q9HC%2FKwPZmQGTr3i7Kr3WuV85G0%2Fimg.jpg)

만약 TCP 방식으로 축구 월드컵 결승 경기를 중계하는 서비스를 구현한다고 하자. 중계 영상에 데이터에 아주 작은 손실이 있을 뿐인데, 손실이 되었다는 이유로 중계가 잠시 끊겨버리고, 문제 있던 부분을 다시 전송하기 위하여 버퍼링이 생겨버리면 어떤 일이 생길까?

최악의 상황에서는 실시간 중계의 의미가 없어질 정도로 실제 경기 실황과 중계 영상을 시청하는 사람 간의 아주 큰 갭이 생겨, 뒤늦게 경기 결과를 알아버릴 수도 있다. 아마 많은 시청자들의 탄식이 터져나올 것이다.

이런 '실시간' 중계가 필요한 상황이라면, 차라리 데이터의 연결성과 신뢰성을 포기하고 일단 손실된 데이터라도 받아볼 수 있는 건 어떨까? 아래처럼 말이다. 

![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FmdcUI%2Fbtsl2o7eSSR%2FAUgzGsCBo4KbJKtZKIZz61%2Fimg.png)

UDP에서는 TCP에서 제공하는 흐름제어, 혼잡 제어 기능이 없다. 일단 데이터 전송하는 속도와 순서를 관리하지 않으며, 최대한 빠른 전송을 지향한다. 덕분에 우리는 축구 중계 영상을 실시간으로 시청할 수 있게 된다. 대신 손실됬던 데이터의 재전송은 없다.

![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FYi7bq%2Fbtsl1VjWoGN%2FXqykeejQeHQWaCKZgVKgik%2Fimg.png)

UDP 정리
- TCP에 비해 빠른 속도, 신뢰성은 낮음
- 비연결성 지향 : 흐름(Flow) 제어 및 혼잡(Congestion) 제어 X 
- 데이터의 전송 순서를 보장X
- 실시간 스트리밍, 온라인 게임에 적합
- 1:1, 1:N, N:N 통신