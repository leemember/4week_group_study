import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../remote/firebase'

// 회원가입 페이지
const SigninPage = () => {
  const handleButtonClick = async () => {
    const provider = new GoogleAuthProvider()

    // 팝업을 띄워서 로그인 처리가 가능하다
    // 이 아래와 같은 두 줄로 소셜 로그인 구현이 끝난다.
    const res = await signInWithPopup(auth, provider)
    console.log('res', res)
  }

  return (
    <div>
      <button onClick={handleButtonClick}>구글로그인</button>
    </div>
  )
}

export default SigninPage
