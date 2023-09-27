import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import useUser from '../../hooks/useUser'
import { useCallback } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../../remote/firebase'

const NavBar = () => {
  const user = useUser()
  const location = useLocation()
  const isLogin = location.pathname !== '/signin'

  // 로그인이 보여지냐 마냐에 대한 분기처리
  const renderButton = useCallback(() => {
    if (user !== null) {
      return (
        <>
          <img
            width={40}
            height={40}
            style={{ borderRadius: '100%' }}
            src={user.photoURL}
            alt=""
          />
          <button
            onClick={() => {
              signOut(auth)
            }}
          >
            로그아웃
          </button>
        </>
      )
    }

    if (isLogin) {
      return <Link to="/signin">로그인/회원가입</Link>
    }

    return null
  }, [])

  return (
    <Container>
      <Link to="/">Home</Link>
      {/* 로그인을 위한 분기처리 */}
      {renderButton()}

      <Link to=""></Link>
    </Container>
  )
}

const Container = styled.div`
  padding: 10px 24px;
  position: sticky;
  top: 0;
  background-color: #fff;
  border-bottom: 1px solid #444;
  z-index: 1;
`

export default NavBar
