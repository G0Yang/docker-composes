# README.md

## docker-composes

### 포함된 프로젝트

* geth
  * 이더리움 노드
* gitlab
  * 깃랩 서버
* ipfs
  * p2p 기반 분산형 파일 시스템
* mongoDB
  * DB
* nginx
  * WAS
* qbitTorrent
  * 웹토렌트
* youtube-dl
  * 유튜브 영상 다운로드 플러그인
* blockchainWallet
  * 블록체인 지갑 모듈 통합 프로젝트
  * 아직 도커로 제작은 안됨. 테스트 중

### cmd.sh 사용법

* 기본 사용법
  * sh cmd.sh \[start/stop/restart] \[container name/all]
  * container name에 배열형태는 지원하지 않는다. one container or all

### 컨테이너 - 내부 볼륨 맵핑 규칙

* 각 프로젝트의 서브 컴테이너가 있을 수 있기 때문에 공용 컨테이너 폴더인 containers를 만들어 그 안에 저장한다.
* 컨테이너에 사용되는 소스파일은 src 안에 둔다.
* src의 셈플 예제는 src\_example 안에 둔다.

### docker build를 해야하는 경우

* Dockerfile을 포함하면서 docker-compose.yaml에 build옵션을 추가한다.

### 새부 환경변수 설정

* .env를 활용

### 웹 서비스는 nginx로 통신하기 때문에 스웜으로 묶는다.

* docker network create nginx\_network
