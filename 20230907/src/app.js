import { useState } from 'react'
import { stocksData } from './data'
import StockRow from './components/StockRow'

function App() {
  // ?? -> nullish는 앞에 것이 안되면 그냥 뒤에 값으로 취급해라
  // () => 지연초기화 : 최초에 단 한 번만 실행하자! 라는 뜻이다.
  // 이렇게 하게 되면 테마가 한 번만 된다.
  const [isDark, setIsDark] = useState(() =>
    JSON.parse(localStorage.getItem('@theme') ?? 'false'),
  )
  const [search, setSearch] = useState('')

  const darkmodeToggle = () => {
    const recentTheme = !isDark
    localStorage.setItem('@theme', JSON.stringify(recentTheme))
    setIsDark(!recentTheme)
  }

  const handleInputChange = (e) => {
    setSearch(e.target.value)
  }

  const darkmodeStyle = {
    backgroundColor: 'rgba(3,18,40,0.7)',
    color: '#fff',
  }

  const lightmodeStyle = {
    backgroundColor: '#fff',
    color: 'rgba(3,18,40,0.7)',
  }

  const searchResult =
    search === true
      ? stocksData
      : stocksData.filter((stock) => {
          return stock.title.includes(search.toLocaleLowerCase())
        })

  return (
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
      <div>
        <input
          placeholder="검색어를 입력해주세요"
          value={search}
          onChange={handleInputChange}
        />
        <button>검색</button>
      </div>

      <ul>
        {searchResult.map((stock, index) => {
          return (
            <StockRow
              rank={index + 1}
              stockName={stock.title}
              isLike={stock.isLike}
              logoUrl={stock.imageUrl}
              key={stock.stockCode}
            />
          )
        })}
      </ul>
    </div>
  )
}
export default App
