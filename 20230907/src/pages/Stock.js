import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'

import { getStockDetail } from '../../remote/stock'

const StockPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const { data, isLoading } = useQuery(['stock', id], () => {
    return getStockDetail(id).then((res) => res.json())
  })

  // 구매하기 버튼을 클릭했을 때의 이벤트
  const handleBuyButtonClick = () => {
    navigate('/buy')
  }

  if (data == null || isLoading === true) {
    return <div>Loading...</div>
  }
  return (
    <div>
      주식 : {JSON.stringify(data)} <button>구매하기</button>
    </div>
  )
}

export default StockPage
