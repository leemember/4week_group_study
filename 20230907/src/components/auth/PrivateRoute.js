import { Navigate } from 'react-router-dom'

import useUser from '../../hooks/useUser'

// 인증이 잘 됐다면 잘 보여지는 페이지
const PrivateRoute = ({ children }) => {
  const user = useUser()

  if (user === null) {
    return <Navigate to="/signin" replace={true} />
  }

  return <div>{children}</div>
}

export default PrivateRoute
