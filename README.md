## 🎀 프론트엔드 그룹 스터디

- 개요 : 매주 1회씩 한 달간 진행되는 React 스터디
- 기간 : 9월 7일 ~ 9월 27일 (총 4회)

<br />

### 📮 1Week (9월 7일 목요일)

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

<br />

---

### 📮 2Week (9월 14일 목요일)

- 조건부형식을 작업할 때는 아래와 같이 직관적으로 하는 것이 보기가 좋다. <br /> 🌟`{isDark === true ? darkmodeStyle : lightmodeStyle}`🌟

```typescript
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

  - fetch로 주식 리스트 api 불러오기 (stocks)
  - 검색 input 컴포넌트에 주식 리스트 입력하면 해당 종목 나타내기
  - `include`와 `filter` 함수 숙지

  ```typescript
  const searchResult =
    search === ""
      ? stocks
      : stocks.filter((stock) => {
          return stock.title
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase());
        });
  ```

  > search(입력한 값)이 빈값이면 일반 주식리스트를 보여줘라, 값이 있다면 입력한 값에 속한 (`includes`) 값을 모두 `toLocaleLowerCase()` 소문자로 바꾼 후, `filter` 필터링 하여 걸러나온 값들을 보여줘라 👍 대문자도 다 소문자로 통일하여 모든 값들을 동일하게 만들어서 검색 결과를 추출하자❗️

- **다크모드/라이드모드** 구현하기 (로컬스토리지 사용)
  - **💡실무에서는 시스템 테마에 맞게 테마를 바꿀 것인가?** 시스템 테마는 다크인데 웹앱 테마는 라이트... 너무 따로 노는 듯한 느낌이 들기도 할 것임. 기획에 따라 다르겠지만 아마 시스템 테마를 따라 그거에 맞는 테마로 적용하는 것이 베스트일 것임
- 널리쉬 연산자 (??)

  - 널리쉬란 앞에 것이 안되면 그냥 뒤에 값으로 취급해라 라는 뜻.

  ```typescript
  const [isDark, setIsDark] = useState(() =>
    JSON.parse(localStorage.getItem("@theme") ?? "false")
  );
  ```

- `useState` 상태 관리 hooks에 `()=> ` 이처럼 지연초기화를 사용할 수도 있다. 지연 초기화란? (Lazy loading) 최초에 단 한 번만 실행해줌!

```typescript
const [isDark, setIsDark] = useState(() =>
  JSON.parse(localStorage.getItem("@theme") ?? "false")
);
```

<br />

---

### 📮 3Week

- React-Query 숙지
  - `queryClient.invalidateQueries();`란? 캐싱된 데이터를 `reset` 해주는 뜻이다.
- api 데이터를 얻어오는 함수명은 `get~`라는 접두어를 붙혀 짓자!
- 콜백함수로 넘긴 것과 아닌 것의 차이

1. `()=> { 함수() }`

- 이렇게 넘겨야 함수가 한 번만 실행된다.

```typescript
onClickLike={() => {
              onClickLike({ ...stock, isLike: !stock.isLike })
            }}
```

- 이렇게 넘기게 될 경우 함수가 여러번 반복하며 실행된다.

```typescript
onClickLike={onClickLike({ ...stock, isLike: !stock.isLike })}
```

하지만, 여기에 있는 `onClickLike`으로 받는 props의 함수 이벤트가 아래와 같은 식이라면 한 번만 실행할 수 있다.

```typescript
const fn이벤트함수명 = () => {
  📍retrun (

  )
}
```

- api 불러올 때는! if문으로 확실하게 데이터를 제어하자.

```typescript
const handleLikeButtonClick = async (item) => {
  const res = await updateStock(item);

  📍if (res.ok === true) {
    queryClient.invalidateQueries("stocksList");
    window.alert("업데이트가 성공하였습니다.");
  }
};
```

이처럼 `if (res.ok === true) {` 직관적으로 나타내어 `res.ok`가 맞다면 캐싱된 데이터를 불러와라.

- 스켈레톤 UI를 사용하여 퍼포먼스 성능 개선하자
  - 개발자도구 -> 퍼포먼스 -> 검사버튼 클릭

### 퍼포먼스 성능 결과

![](https://velog.velcdn.com/images/leemember/post/402c8938-b3a3-4e60-a2d4-a7cffd7b8043/image.png)

스켈레톤 UI를 하고난 뒤 개선된 결과이다.

![](https://velog.velcdn.com/images/leemember/post/0f84d6cc-56e2-4a8d-97a6-13df4621e28f/image.png)

여기서 **CLS (Cumulative Layout Shift)**가 0에 수렴해야 좋은 성능이라고 말할 수 있다.
브라우저 렌더링에서 일어나는 레이아웃이 적게 일어났다는 것이다.

> **📍 스켈레톤 UI는 어떻게 만들어야 좋은 것일까 ?** <br/>
> 실제 데이터 콘텐츠 UI의 높이값과 데이터가 나오기 전의 로딩될 때 보여지는 스켈레톤 UI의 height(높이)와 비슷해야한다.
