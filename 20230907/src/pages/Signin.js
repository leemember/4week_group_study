import { FirebaseError } from 'firebase/app'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../remote/firebase'

// 회원가입 페이지
const SigninPage = () => {
  const navigate = useNavigate()

  const handleButtonClick = async () => {
    const provider = new GoogleAuthProvider()

    // 팝업을 띄워서 로그인 처리가 가능하다
    // 이 아래와 같은 두 줄로 소셜 로그인 구현이 끝난다.

    try {
      // await -> 얘가 끝났을 때 아래로 흐르게 하자.
      // 순서 보장이 된다.
      await signInWithPopup(auth, provider)
      // 로그인되면 홈으로 가버렷 ㅇㅅㅇ
      navigate('/')
    } catch (e) {
      // FirebaseError로 관한 오류이니?
      if (e instanceof FirebaseError) {
        if (e.code === 'auth/popup-closed-by-user') {
          return
        }
      }
    }
  }

  return (
    <div>
      <button onClick={handleButtonClick}>구글로그인</button>
    </div>
  )
}

export default SigninPage
