# mysql index 수업을 위한 샘플 데이터 입니다.

## 사용법
```mysql -u유저명 -p 데이터베이스 < cities.sql```

## 쿼리 생성 방법
cities.json은 아래 주소에 있는 도시 리스트입니다. 
https://github.com/lutangar/cities.json

conver.js는 위의 파일을 sql로 전환하는 코드입니다. 

아래 명령을 실행시키면 cities.json을 기반으로 cities.sql 파일이 생성됩니다. 
```
npm install
node conver.js
```