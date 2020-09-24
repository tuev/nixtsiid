import * as qs from 'qs'
import { PathLike } from 'fs'

const apiConfig = {
  returnRejectedPromiseOnError: true,
  withCredentials: true,
  timeout: 30000,
  baseURL: process.env.BASE_URL,
  headers: {
    common: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  },
  paramsSerializer: (params: PathLike): string =>
    qs.stringify(params, { indices: false }),
}

export default apiConfig
