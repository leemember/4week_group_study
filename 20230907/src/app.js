import { useState } from 'react'
import StockList from './components/home/StockList'
import { getStocks, updateStock } from '../remote/stock'
import { useQuery, useQueryClient } from 'react-query'

const darkmodeStyle = {
  backgroundColor: 'rgba(3,18,40,0.7)',
  color: '#fff',
}

const lightmodeStyle = {
  backgroundColor: '#fff',
  color: 'rgba(3,18,40,0.7)',
}

function App() {
  const { data: stocks, isLoading } = useQuery(['stocksList'], () =>
    getStocks().then((res) => {
      // axios 말고 fetch로 불러올 경우에는 then으로 값을 2번 뽑아내준다.
      if (res.ok === false) {
        throw new Error('주식 데이터를 불러오지 못했어요')
      }
      return res.json()
    }),
  )
  const queryClient = useQueryClient()

  console.log('stocks', stocks)

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

  const handleLikeButtonClick = async (item) => {
    const res = await updateStock(item)

    if (res.ok === true) {
      queryClient.invalidateQueries('stocksList')
      window.alert('업데이트가 성공하였습니다.')
    }
  }

  const searchResult =
    search === ''
      ? stocks
      : stocks.filter((stock) => {
          return stock.title
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase())
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
        {isLoading ? (
          <div
            style={{
              width: '100%',
              height: '400px',
              background: 'pink',
            }}
          >
            <h3>로딩중...</h3>
          </div>
        ) : (
          <StockList
            stocks={searchResult}
            onClickLike={handleLikeButtonClick}
          />
        )}
      </ul>
    </div>
  )
}
export default App
