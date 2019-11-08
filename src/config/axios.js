import axios from 'axios'

//  DEVELOPMENT
const server = 'http://localhost:3000'

//  PRODUCTION
// const server = ''

const instance = axios.create({
  baseURL: `${server}`
})

export default instance