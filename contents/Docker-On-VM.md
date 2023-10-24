---
title: "Azure에서 Linux VM 대여 후, 우분투에 도커 설치"
subtitle: "클라우드 가상머신에서 Linux와 Docker 컨테이너 실습하기 1편"
date: "2023-09-03"
---
## 개요

리눅스 및 도커를 활용한 개발 실습을 하려고 합니다.
백엔드 개발자이니, 리눅스나 기타 인프라 환경에 더 익숙해질 필요를 느낍니다.
 
문제가 있습니다. 현재 사용하고 있는 저의 로컬 환경(LG노트북, AMD)은 가상화를 지원한다고 주장하지만, 실제로 사용이 어려운 상태입니다. 그래서 여러차례 고생을 했습니다.
- Docker for Desktop을 설치하거나, WSL2 설치 등을 목적으로 Windows에서 제공하는 가상화 기능을 켜는 등, 가상화된 리눅스의 정상 설치 및 설정 변경을 위해 재부팅을 하면 컴퓨터가 먹통이 되어버립니다. 

**이처럼 본인 컴퓨터에 리눅스를 설치하기 어려운 상황에서 도커를 어떻게 다룰 수 있을까요?**

저는 노트북을 한 대 더 사는 것 까지 생각하다가... 
마침내 클라우드에서 컴퓨터를 대여하는 방법을 떠올렸습니다.
 
AWS, Azure, GCP, NCP 등에서 가상머신을 대여하면
Linux계열 OS로 동작하는 컴퓨터 한 대를 대여하는 효과를 얻을 수 있습니다.
그 OS환경에서 도커를 설치해려는 겁니다.
 
저는 마이크로소프트의 Azure를 이용하기로 했습니다.
사실 제가 해보려는 우분투 + 도커 조합의 서비스는 이미 Azure에서 구매가 가능합니다.

3년간 2만4천원 정도이니 비용이 그리 비싸다고 할 순 없지만
편리해지는 만큼, 개발자는 학습의 기회를 잃어버리니까 직접 해보는 길을 선택해봅니다.
![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FrDK95%2FbtssT74E1yj%2FwWH44Kf4PRy86V1PT2DNG0%2Fimg.png)



## 1. Azure 리소스 만들기(클라우드 컴퓨터 대여)
![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbSagK5%2FbtssTttgfrB%2F4cOMWsmwfxWBjODma1E861%2Fimg.png)
왜 저는 Azure 선택했을까요?
방통대 컴퓨터과학과 학생이라, Azure를 위한 1년 짜리 100$ 크레딧을 발급받을 수 있기 때문입니다.

이번 학기에 Azure를 다루는 '클라우드 시스템' 과목을 신청했는데, 겸사겸사 좋은 실습 기회가 될 것 같습니다.

방통대나, 컴퓨터 과학과가 아니더라도,
대개, 대학생에게 학교로부터 주어지는 ac.kr 이메일만 인증되면 MS의 학생용 계정을 사용할 수 있습니다.

각 클라우드 서비스의 신규사용자의 경우 한 동안 비용을 들이지 않고, 가상머신을 대여하는 경우가 있으니 알아보시기 바랍니다.
- 가장 많이 사용하는 AWS에서는 초기 1년간 Free Tier로 EC2 인스턴스를 빌려줍니다. 학생이면 Azure처럼 크레딧을 줄 수도 있고요. 물론 기본 사용량을 넘기거나, 기간을 넘기면 비용이 부과될 수 있으니 유의하시기 바랍니다.



## 2. 가상 머신 만들기 
- [Azure에서 제공하는 매뉴얼](https://learn.microsoft.com/ko-kr/training/modules/create-windows-virtual-machine-in-azure/2-create-a-windows-virtual-machine)을 참고합니다. 설명이 자세하니 차근히 따라가보시면 됩니다.

![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0ieFi%2FbtssUPvQyWw%2FHzLPa9OAe3zeDKKJMtd7U1%2Fimg.png)
![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F2kis7%2FbtssP7R28Id%2FZm3XIKy3CtdOfqog9H6T91%2Fimg.png)
Azure의 홈으로 가시면 리소스 만들기 버튼이 있습니다.
이곳에서 리눅스 계열의 OS인 우분투 - Ubuntu Server 22.04 LTS로 '만들기'를 합니다.

![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FLifuU%2FbtssMCSOpiw%2FYkWXXFcVX3dO3kfPRfAgbk%2Fimg.png)

![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbfsr6z%2FbtssVMTaYWF%2FiCAkYxBacaxGKZKSQGwjak%2Fimg.png)
어떤 가상 머신을 만들지 옵션 선택이 필요로 합니다. Azure에서 어떤 컴퓨터를 빌릴지 고르는 과정이라고 보시면 됩니다.
 
이 과정에서 '크기' 부분을 주목합니다. 

![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb1dhLB%2FbtssNsh7EBM%2FVNI3PkxYuqjmchj0invjIK%2Fimg.png)

사진에서 다른 목록이 생략되긴 했지만, 컴퓨터의 CPU, RAM 성능 용량 등, 환경마다 비용이 천차만별입니다. 실습용이니 이번에는 저는 가장 저렴한 것으로 빌리기로 했습니다.

### SSH
가상 머신이 생성되면 SSH(Secure Shell) 방식으로 연결하려고 합니다.
SSH는 원격의 호스트 컴퓨터에 접속하기 위해 사용하는 인터넷 프로토콜입니다. 
비밀번호보다는 높은 수준의 보안 방식으로, 해당 호스트로 접속시 비밀번호 대신 키를 제출하는 방식입니다. 

SSH 접속은 데이터 전송이나, 원격제어에 활용됩니다.
소스 코드를 원격 저장소 Github에 push할 때,
또는 클라우드의 가상머신에 접속하여 해당 머신에 명령을 내릴 때 입니다.

이외에 보안 설정에 대한 자세한 설명은 일부러 넘어가겠습니다. 
다른 설정은 크게 하지 않았습니다.

### 가상머신 생성
중요한 설정은 끝났습니다. 기본적으로 설정이 되어있습니다.

파란색 버튼인 검토+만들기를 누르면, 유효성 확인 뒤 가상 머신 생성이 완료 됩니다.
이때 알림창이 하나 뜹니다. '프라이빗 키 다운로드 및 리소스 만들기'

후술하겠지만, 가상머신과 연결할 때 SSH 방식으로 연결할 것입니다.
이때 .pem 파일의 경로를 다뤄야 하니, 저장 장소를 잘 기억해두세요.

이 파일을 가지고 있어야 공용 IP 주소로 접속이 가능하도록 설정했습니다.

![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FFcFUW%2FbtssN2wLrMC%2FqYcFc1qZpHYQVBIIUntOJ1%2Fimg.png)
자 이제 생성한 가상 머신으로 접속해서 기본적인 정보들을 확인해봅니다.
![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb5Rdbd%2FbtssS1xyu9l%2Fk2kICrbZ7OpUO6ISzcLBx1%2Fimg.png)
Azure의 공용 IP는 우리가 자주 사용하는 IPv4형태입니다.
Azure의 VM은 AWS EC2와 달리 인스턴스를 중지한 뒤 다시 시작해도 IP 주소가 바뀌지 않습니다.

이제 이 주소를 브라우저에 URL 위치에 입력하면, 
인터넷을 통해 해당 Azure 가상머신(AWS의 인스턴스)에 접속할 수도 있습니다. 
![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FDzw3D%2FbtssNvTvsE7%2Fsn9r1sNmRDAhojIXX8DTn0%2Fimg.png)
여담이지만 브라우저 URL 입력창에 www.naver.com  와 같은 URL을 입력하면,
DNS(Domain Name System)을 통해서 www.naver.com에 연결된 공용 IP를 브라우저가 받아옵니다.
그럼 브라우저가 이 공용 IP에 해당하는 컴퓨터를 찾아서, 네이버에서 제공하는 웹페이지를 브라우저에서 볼 수 있게 도와줍니다.

## 3. SSH 방식의 연결
연결 부분입니다.
왼쪽에 나열된 카테고리에서 '연결' 항목으로 이동합니다.

![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FoFuX4%2FbtssS3hRVPa%2FhDkhqML2uW2pRcsewhjPDK%2Fimg.png)

이후, 어떤 SSH 방식으로 가상머신과 연결할 것인지 선택할 수 있습니다.
저는 원시 SSH 방식을 선택하고, 옆에 안내된 내용을 잘 읽어봅니다.
가상머신을 생성하면서 XXXX.pem 확장자로된 파일을 로컬 컴퓨터 내의 어느 경로엔가 잘 저장하셨을 겁니다.

![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcA6pX2%2FbtssT5FLM5Y%2Fp4bfUersvNBRoejf6kSIek%2Fimg.png)

![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FPJddu%2Fbtss3KOA63S%2FwbAuk33FSK6XWh8E1tlHXK%2Fimg.png)
그 파일이 저장된 경로를 위 사진의 안내에 따라 3번 창에 기재하시면 됩니다.
그럼 그것을 복사해서 Shell 창에 간편하게 입력할 수 있게 해줍니다.
 
보안상 로컬 경로는 가렸습니다.
공용 IP로 접속하려면 프라이빗 키가 담겨있는 .pem 파일이 필요합니다.
저는 접속시에 필요한 비밀번호도 추가적으로 설정했답니다.

![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FIJu47%2FbtssT8XhTuR%2FNnWw7oPGGSJDLQqQC6ceoK%2Fimg.png)
이제 로컬 환경 Windows의 Terminal을 열어서 SSH를 통해 생성한 가상 머신과 잘 연결했습니다.

처음이라 연결 부분에서 조금 헤매긴 했지만 잘 연결되었습니다.

## 4. 도커 설치
<https://docs.docker.com/engine/install/ubuntu>
위 링크에 접속해서, 안내에 따라 도커 설치를 위한 명령어 순차적으로 입력합니다.
![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbDWA8w%2FbtssSDiXVMM%2FEBorIb7KF4jggsVvSiXzEk%2Fimg.png)
![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FrgQNh%2FbtssN0yXx8k%2FpeiGUpLz00drszo0UYQEk0%2Fimg.png)
![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbdsCy6%2FbtssSpkFiH0%2FT0FCncfzf13kvKvhGdPiEk%2Fimg.png)
일련의 명령어 입력 및 설치, 대기 과정을 거쳤습니다.
![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FDMPzB%2FbtssPx4i0w1%2Ft8hEsE0gTx4ANVpFjIjg50%2Fimg.png)
설치를 잘 마쳤다는 표시로
Hello form Docker! 를 출력해줍니다.
잘 설치가 되었습니다.

### 참고
<https://dev-astra.tistory.com/370>   
<https://www.slideshare.net/ianychoi/azure-ubuntu-vm>   
<https://velog.io/@rockwellvinca/Azure-가상-머신에-연결하는-방법-접속하는-방법-feat.-SSH-with-.pem-key>   
<https://cloud.syncrofusion.com/?page_id=4&pageid=1&kboard_list_sort_remember=1&kboard_list_sort=best&uid=405&mod=document>   3