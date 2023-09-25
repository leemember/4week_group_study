## 프론트엔드 그룹 스터디

> 매주 1회씩 한 달간 진행되는 스터디 (총 4회)

### 1Week (9월 7일 목요일)

- 브라우저 렌더링 원리
- 요즘은 왜 제이쿼리를 안쓸까 ?
- Node와 Npm
- 싱글 페이지 어플리케이션(SPA)이란?
- 바벨에 대해서
- 웹팩에 대해서
- ES LINT와 Prettier
- React
- 실습 (프로젝트 생성 및 패키지 환경구성)
- 컴포넌트란? (컴포넌트 실습)
  - 컴포넌트를 만드는 기법 2가지 (class 기반 & function 기반)

---

### 2Week (9월 14일 목요일)

- 조건부형식을 작업할 때는 아래와 같이 직관적으로 하는 것이 보기가 좋다. 🌟`{isDark === true ? darkmodeStyle : lightmodeStyle}`🌟

```javascript
 <div style={isDark === true ? darkmodeStyle : lightmodeStyle}>
      <div onClick={darkmodeToggle}>
        {isDark === true ? (
          <img
            src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-02-64.png"
            alt="태양"
          />
        ) : (
          <img
            src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-10-64.png"
            alt="달"
          />
        )}
      </div>
```

### 실습

- 📈 주식 리스트 만들기
  - fetch로 주식 리스트 api 불러오기
  - 검색 input 컴포넌트에 주식 리스트 입력하면 해당 종목 나타내기
- 다크모드 라이드모드 구현하기 (로컬스토리지 사용)
