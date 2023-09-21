export const getStocks = () => {
  return fetch('http://localhost:8888/stocks')
}

export const getStockDetail = (id) => {
  return fetch(`http://localhost:8888/stocks/${id}`)
}

export const updateStock = (stock) => {
  return fetch(`http://localhost:8888/stocks/${stock.id}`, {
    method: 'PUT',
    body: JSON.stringify(stock),
    headers: {
      'Content-type': 'application/json',
    },
  })
}
