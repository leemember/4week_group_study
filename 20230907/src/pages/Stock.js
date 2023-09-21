import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'

import { getStockDetail } from '../../remote/stock'

const StockPage = () => {
  const { id } = useParams()

  const { data, isLoading } = useQuery(['stock', id], () => {
    return getStockDetail(id).then((res) => res.json())
  })

  console.log('params', id)

  if (data == null || isLoading === true) {
    return <div>Loading...</div>
  }
  return <>gdgd {JSON.stringify(data)}</>
}

export default StockPage
