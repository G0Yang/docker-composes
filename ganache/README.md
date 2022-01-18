# Ganache
- 이더리움 네트워크 개발환경을 만들어주는 프로젝트
- 간단하게 외부 사설 이더리움 네트워크를 구축할 수 있다.

## image build
- docker build -t ganache .

## env setting
- env 설정방법
  - docker-compose 파일 안에 들어갈 민감한 정보(니모닉)들을 별도로 관리하기 위함.
  - 니모닉은 배열값으로 들어가야하기 때문에 docker-compose 파일에서 "" 로 묶어서 사용함.
  - 나머지 옵션값은 단일 값이여서 ${} 문법으로 즉시 사용가능함.

## ganache options
- 기타 옵션
  - https://github.com/trufflesuite/ganache-cli#options
- command
  - --verbose
    - stdout 옵션
  - --debug
    - 디버깅 옵션
  - --port [PORT]
    - 외부 오픈 포드
  - --host [IP_ADDRESS]
    - 공개 범위 [localhost/IP_ADDRESS]
  - --mnemonic MNEMONIC
    - 주소 관리를 편하게 하기 위함.
  - --gasPrice [INT]
  - --gasLimit [INT]
  - --networkId [INT]
  - --chainId [INT]
  - --blockTime [INT]
    - 채굴 타이밍
  - --defaultBalanceEther [FLOAT]
    - 네트워크 구동 시 계정에 설정할 초기 이더값.
    - default: 100 Ether
  - --accounts [INT]
    - 네트워크 구동 시 계정의 갯수.
    - 니모닉, 시드 등 HD Wallet의 ID 값을 기준으로 설정된다.
