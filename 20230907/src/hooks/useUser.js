import { useRecoilValue } from 'recoil'
import { userAtom } from '../atom/userAtom'

// 커스텀 hooks
const useUser = () => {
  return useRecoilValue(userAtom)
}

export default useUser
