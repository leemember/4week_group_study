import StockRow from './StockRow'

const StockList = ({ stocks, onClickLike }) => {
  return (
    <ul>
      {stocks.map((stock, index) => {
        return (
          <StockRow
            id={stock.id}
            rank={index + 1}
            stockName={stock.title}
            isLike={stock.isLike}
            logoUrl={stock.imageUrl}
            key={stock.stockCode}
            onClickLike={() => {
              onClickLike({ ...stock, isLike: !stock.isLike })
            }}
          />
        )
      })}
    </ul>
  )
}

export default StockList
