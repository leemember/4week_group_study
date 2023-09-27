import { useState } from 'react'

// firebase에서 인증의 상태가 바뀔 때를 알려주는
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../../remote/firebase'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { userAtom } from '../../atom/userAtom'

const AuthGuard = ({ children }) => {
  // 인증이 됐는지 안됐는지 판단해주는 값
  // 인증처리 되는 로딩시간 동안 스플래시 화면을 보여주자 !
  const [인증처리, set인증처리] = useState(false)

  const 유저정보업데이트함수 = useSetRecoilState(userAtom)

  onAuthStateChanged(auth, (user) => {
    console.log('user', user)
    if (user === null) {
      유저정보업데이트함수(null)
    } else {
      유저정보업데이트함수({
        displayName: user.displayName,
        photoURL: user.photoURL,
        email: user.email,
        uid: user.uid,
      })
    }

    set인증처리(true)
  })

  if (인증처리 === false) {
    return null
  }

  return <>{children}</>
}

export default AuthGuard
