import { Md5 } from 'ts-md5'
import { timestamp, API_KEY, PRIVATE_KEY } from '../../constants'

const hash = Md5.hashStr(timestamp + PRIVATE_KEY + API_KEY)

export default hash
