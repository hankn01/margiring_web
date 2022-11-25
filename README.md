# 📈 Margiring

<img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"> <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=NestJS&logoColor=white"> <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white"> <img src="https://img.shields.io/badge/DynamoDB-3776AB?style=for-the-badge&logo=Amazon DynamoDB&logoColor=white"> <img src="https://img.shields.io/badge/S3-569A31?style=for-the-badge&logo=Amazon S3&logoColor=white">

> 암호화폐 투자, 이제 더 이상 위험하게 하지 말고 마지링과 함께, 블록코딩으로 안전하게 해요!

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/931ed5a3-39c3-4dcb-a33d-6ddc29ff141a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-11-17_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_2.39.02.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221125T094005Z&X-Amz-Expires=86400&X-Amz-Signature=999af19035ac11642f7718a7b2e338744826659d9c42411121d54d547d01f1ba&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA%25202022-11-17%2520%25E1%2584%258B%25E1%2585%25A9%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25AB%25202.39.02.png%22&x-id=GetObject">


## <p align="center"> 🔥 소프트웨어마에스트로 제 13기 한강의 기적 팀 프로젝트 🔥  </p>

# 👨‍ 팀원
* 한의진(팀장)
* 이재환
* 김환희

# 💡  프로젝트 개발 배경
1. 알고리즘 트레이딩의 점유율이 높은 상황에서도 체계없는 투자를 진행하는 투자자들에게 알고리즘 트레이딩을 통해 체계적인 투자를 진행할 수 있게 함.
2. 투자 방법을 모르는 대부분의 개인투자자들도 알고리즘 트레이딩을 쉽게 할 수 있게 진입장벽을 낮춤.

# 📝 주요 기능
## 1. 블록 코딩을 활용한 알고리즘 트레이딩 서비스
스크래치, 엔트리 같은 교육에 많이 사용되는 블록형 VPL(Visual Programming Language)를 이용하여 이용자들이 쉽게 암호화폐 알고리즘을 구성할 수 있도록 함. 기존의 블록코딩에 ‘(어떤 종목)의 (지표), 종목들의 이름 (BTC, ETH 등), 지표 (이동평균선, MACD, RSI)’ 등의 블록이 추가됨. 초등학교, 중학교의 정보교과과목에서 같은 인터페이스의 엔트리를 배우기 때문에 교육용 소프트웨어로 매우 친숙할 것.
## 2. 건전한 투자와 수익을 위한 백테스팅 서비스
사용자가 블록으로 만든 알고리즘을 과거 데이터를 바탕으로 테스트해 예상 수익률, 변동성, MDD 등을 확인할 수 있음. 이러한 검증을 통해 사용자는 투자 시 수익률을 높이고 리스크를 줄이는 방향으로 더 건전한 투자를 할 수 있음.

#  📚  기술 스택 및 라이브러리, 프레임워크
+ Javascript
+ Typescript
+ Zipline Ingest Backtesting Tool
+ Python
+ Amazon AWS DynamoDB
+ Amazon AWS S3
+ Amazon AWS Elastic Beanstalk
+ Amazon AWS EC2
<br><br>

#  🛠️  아키텍처
<img src="/uploads/f15aa47fa7c30cee88f33d4e72731aa6/아키텍처.png">

# 개발자용 테스트 방법

프로젝트에서 개발 시 테스트는 다음과 같이 수행할 수 있습니다.

### `npm start`
### `yarn start`

실행 후 다음과 같이 확인할 수 있습니다 \
[http://localhost:3000](http://localhost:3000) 을 브라우저에 입력하여 실행합니다. \
코드 수정 시 자동으로 Reload 됩니다  

Cypress를 이용한 테스트 모드 실행 방법입니다  
### `yarn test`

배포를 위해 빌드를 할 경우의 명령어입니다  
### `npm run build`

`build` 폴더에 배포를 위한 파일이 빌드됩니다.  
